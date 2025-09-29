const src = 'https://www.baidu.com/?id=123&name=aaa&phone=12345';

function getQuery(url) {
    if (!url.includes('?')) return {}

    let params = url.split('?')[1]?.split('&') || []
    let res = params.reduce((a, c) => {
        const [key, value = ''] = c.split('=')
        a[key] = decodeURIComponent(value) // 🌟🌟🌟🚗🚗🚗 
        return a
    }, {})
    return res
}

function getQueryString(str) {
    if (!str.includes('?')) return null
    
    const params = str.split("?")[1].split("&") || []
    const obj = []
    for (let item of params) {
        const [key, value = ''] = item.split('=')
        obj[key] = decodeURIComponent(value)
    }
    return obj
}

// 解析：parse('foo=bar&abc=xyz&abc=123')
function parse(str){
    if(!str) return {}

   let res = new Map()
   let strArr=str.split('&')
   for (let val of strArr){
     let [key,value='']=val.split('=')
     key=decodeURIComponent(key)
     value=decodeURIComponent(value)

     if(res.has(key)){
       let tempValue = Array.isArray(res.get(key)) ? res.get(key).concat(value) : [res.get(key),value]
       res.set(key,tempValue)
     }else{
        res.set(key,value)
     }
   }
   return Object.fromEntries(res) // 转为普通对象
 }

 console.log(42,parse('foo=bar&abc=xyz&abc=123'))

 