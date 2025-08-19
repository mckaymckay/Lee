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