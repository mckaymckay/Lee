let urls = [
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];



/**
 * 串行请求并获取结果
 * */

// 使用await
async function main(urls){
    const results=[]
    for(let url of urls){
        const res =await fetch(url) // 等待上一个请求完成
        const data = await res.json() // 假设返回json
        results.push(data)
    }
    return results
}

// 使用reduce
// .then()方法总是返回一个Promise，Promise的值取决于回调函数的返回值
function  fetchUrls(urls){
    const results=[]
    return urls.reduce((promise,url)=>{ // promise是上一次的Promise
        return promise
                .then(()=>fetch(url))  // 返回新的Promise<Response>
                .then(res=>res.json()) // fetch返回的res是一个Response对象，需要调用res.json(),res.text()等方法来获取实际数据
                .then(data=>{
                    results.push(data) // 回调返回undefined
                })                     // 整个then返回Promise<undefined>
                .catch(error=>{
                    console.log(42,error);
                })
            },                   
    Promise.resolve())
    .then(()=>results)
}



fetchUrls(urls).then(results => {
  console.log(results); 
});
