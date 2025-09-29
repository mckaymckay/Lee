import {useRef,useCallback} from 'react'
function debounce(fn,delay=300,immediate=false){
    let timer=null

    return function(...args){
        if(timer){
            clearTimeout(timer)
        }

        if(immediate){
            let callNow = !timer
            timer=setTimeout(() => {
                timer=null
            }, delay);
            if(callNow) fn.apply(this,args)
        }else{
            timer=setTimeout(() => {
                fn.apply(this,args)
            }, delay);
        }
    }
}

const useDebounce=(fn,delay=300,immediate=false)=>{
    const timeRef = useRef(null)
    const func = useCallback((...args)=>{
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        if(immediate){
            let callNow=!timeRef.current
            timeRef.current = setTimeout(() => {
                timeRef.current=null
            }, delay);
            if(callNow) fn.apply(this,args)
        }else {
            timeRef.current=setTimeout(() => {
                fn.apply(this,args)
            }, delay);
    }
    },[fn,delay,immediate])
    return func
}

function throttle(fn,delay){
    let lastTime = 0
    let timer=null

    return function(...args){
        const now = Date.now()
        const remaining = delay - (now-lastTime)
        if(remaining<=0){
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer=null
            }, delay);
            fn.apply(this,args)
            lastTime=now
        }else if(!timer){
            timer=setTimeout(() => {
                fn.apply(this,args)
                lastTime = Date.now()
                timer = null
            }, remaining);
        }
    }
}