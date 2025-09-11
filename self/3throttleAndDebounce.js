/**
 * 防抖：debounce
 * @param {*} fn 
 * @param {*} delay 
 * @param {*} immediate 
 * @returns 
 */

function debounceInit(func, delay) {
    let timer; // 用于存储定时器的 ID

    return function (...args) {
        const context = this; // 保存当前上下文

        // 清除之前的定时器
        clearTimeout(timer);

        // 设置新的定时器
        timer = setTimeout(() => {
            func.apply(context, args); // 调用原始函数
        }, delay);
    };
}

function debounce(fn, delay = 300, immediate) {
    let timer = null

    return function (...args) {
        // 如果timer有值（即上一次setTimeout还没到时间），就取消掉那个定时器（防止它再执行）
        if (timer) clearTimeout(timer)

        if (immediate) {
            const callNow = !timer
            // delay毫秒后，让防抖函数可以再次执行
            timer = setTimeout(() => {
                timer = null
            }, delay)

            if (callNow) fn.apply(this, args)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }
}


function testFunc(name) {
    console.log(`${name} 触发`);
}
const debounced = debounce(testFunc('mm'), 3000, false);


/**
 * 节流：throttle
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */

function throttle(fn, delay = 300) {
    let lastTime = 0
    return function (...args) {
        const now = Date.now()
        if (now - lastTime >= delay) {
            lastTime = now
            fn.apply(this, args)
        }
    }
}



// 增强节流函数
function throttlePro(fn, delay) {
    let lastTime = 0 // 上次执行时间点
    let timer = null // 定时器

    return function (...args) {
        const now = Date.now()

        const remaining = delay - (now - lastTime)
        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            fn.apply(this, args)
            lastTime = now // 🌟
        } else if (!timer) {
            // 还没到时间，且没有定时器
            timer = setTimeout(() => {
                fn.apply(this, args)
                lastTime = Date.now() // 🌟
                timer = null // 🌟
            }, remaining);
        }
    }
}

function myFunc(fn,delay){
    let lastTime=0
    let timer=null
    return function(...args){
        const now=Date.now()
        const remaining=delay-((now-lastTime))
        if(remaining<=0){
            if(timer){
                clearTimeout(timer)
                timer=null
            
            }
            fn.apply(this,args)
            lastTime=now
        }else if(!timer){
            timer=setTimeout(()=>{
                fn.apply(this,args)
                lastTime=Date.now()
                timer=null
            },remaining)
        }
    }
}
const betterFn = throttle(() => console.log('fn 函数执行了'), 1000)
// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
betterFn()