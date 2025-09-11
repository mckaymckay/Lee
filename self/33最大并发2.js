import { Image } from 'canvas'

var urls = [
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            console.log(url, "一张图片加载完成");
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}


/**
 * 方法一：使用Promise和递归实现最大并发限制
 */

async function executor(taskList, url) {
    count++
    try {
        const res = await loadImg(url)
        console.log(35, url)
        console.log(res)
    }
    catch (e) {
        console.log(39, e)
        taskList.push(url)
    }
    finally {
        count--
        if (taskList.length && count < concurrency) {
            executor(taskList, taskList.shift())
        }
    }
}

let count = 0
const concurrency = 3
function main() {
    const taskLists = [...urls]
    for (let i = 0; i < concurrency; i++) {
        executor(taskLists, taskLists.shift())
    }
}
// main()



/**
 * 方法二：使用Promise.race补位，但是不能失败重传
 */
function loadLimit(urls, handler, limit) {
    const urls_copy = [...urls]
    // 存储正在执行的Promise数组
    let promise_array = []

    promise_array = urls_copy.splice(0, limit).map((url, index) => handler(url)
        .then(() => {
            return index
        })
        .catch(error => {
            console.log('error loading')
            return index
        })
    )

    // 使用reduce处理剩下的url
    return urls_copy.reduce(async (pre_promise, url) => {
        // 等待第一个Promise完成
        const res = await pre_promise
        console.log('res', res)

        if (res !== undefined) {
            // 在完成的位置放入新的Promise
            promise_array[res] = handler(url).then(() => {
                return res
            })
        }
        // 返回最先完成的Promise
        return Promise.race(promise_array)
    }, Promise.race(promise_array))
}

// loadLimit(urls, loadImg, 3)


/**
 * 方法三：使用Promise.race补位，支持失败重传
 * @param {*} urls 
 * @param {*} handler 
 * @param {*} limit 
 * @param {*} maxRetries ：最大失败重传次数
 * @returns 
 */
function loadLimitWithError(urls, handler, limit, maxRetries = 3) {
    const urls_copy = [...urls]
    let promise_array = []
    // 存储失败重试的次数
    const retryMap = new Map()

    // 创建单个Promise的处理函数
    const createPromise = (url, index) => {
        const retryCount = retryMap.get(url) || 0
        return handler(url)
            .then(() => {
                return { status: 'success', index }
            })
            .catch(() => {
                if (retryCount < maxRetries) {
                    retryMap.set(url, retryCount + 1)
                    urls_copy.push(url)
                    console.log(`将 ${url} 重新加入队列，等待重试`)
                } else {
                    console.log(`${url} 达到最大重试次数 ${maxRetries}，不再重试`)
                }
                return { status: 'error', index }
            })
    }

    // 🌟🌟🌟 注意这里是splice
    promise_array = urls_copy.splice(0, limit).map((url, index) => {
        return createPromise(url, index)
    })
    // 处理剩下的Promise
    return urls_copy.reduce(async (pre_promise, url) => {
        const res = await pre_promise

        if (res && res.status === 'success') {
            promise_array[res.index] = createPromise(url, res.index)
        }
        return Promise.race(promise_array)
    },
        Promise.race(promise_array))
}

// 具有失败重传
// loadLimitWithError(urls, loadImg, 3, 3)

const concurrencyLimit = 3
const maxRetries = 3
function test(urls,loadFunc){
    const lists=[...urls]
    let promiseArr = []
    let promiseRetry=new Map() 

    function handlePromise(url,index){
        const retryCount = promiseRetry.get(url)||0
        return loadFunc(url).then(()=>{
            return {status:'success',index}
        })
        .catch(error=>{
            if(retryCount<maxRetries){
                promiseArr.push(url)
                promiseRetry.set(url,retryCount+1)
            }else{
                console.log();
            }
            return {status:'error',index}
        })
    }

    promiseArr=lists?.splice(0,concurrencyLimit)?.map((item,index)=>{
        return handlePromise(item,index) 
    })

    return lists.reduce(async(accPromise,cur)=>{
        const res= await accPromise
        if(res&&res.status==='success'){
            promiseArr[res.index]=handlePromise(cur,res.index)
        }
        return Promise.race(promiseArr)

    },Promise.race(promiseArr))
}

test(urls,loadImg)