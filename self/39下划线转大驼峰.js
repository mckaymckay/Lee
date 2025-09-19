let str='get_user_info'

function formatStr(str){
    if(!str.includes('_')) return str
    return str.split('_').map((item,index)=>{
        if(index>0){
            return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()
        }
        return item
    }).join('')
}

console.log(formatStr(str))