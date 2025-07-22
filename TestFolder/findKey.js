/**
 * 寻找对象的key
 */

const root = {
    name: 'A',
    age:12,
    children: [
      {
        name: 'B',
        age:13,
        children: [
          {
            name: 'D',
            age:14,
          },
          {
            name: 'E',
            age:15,
          },
        ],
      },
      {
        name: 'C',
        age:16,
        children: [
          {
            name: 'F',
            age:17,
          },
          {
            name: 'G',
            age:18,
            children: [
                {
                  name: 'H',
                  age:14,
                },
                {
                  name: 'I',
                  age:15,
                },
              ]
          },
        ],
      },
    ],
  };

// 1. 寻找对象中所有age等于14的key
function findKey(obj, targetAge,res =[]) {
    if(obj.age===targetAge){
        res.push(obj.name)
    }
    if(obj.children){
        for(let child of obj.children){
            findKey(child,targetAge,res)
        }
    }
    return res
}

function findKey1(obj,targetAge){
    let res = []
    let arr=[obj]
    while(arr.length){
        let len=arr.length
        for(let i=0;i<len;i++){
            let cur=arr.shift()
            if(cur.age===targetAge) res.push(cur.name)
            if(cur.children) arr.push(...cur.children)
        }
    }
    return res
}

console.log(findKey(root,14))
console.log(findKey1(root,14))

// 2. 寻找name为“E”的父节点
function findParent(obj,targetName){
    if(!obj.children) return null

    for (let child of obj.children){
        if(child.name===targetName){
            return obj.name
        }
        let result =findParent(child,targetName)
        if(result) return result
    }
    return null
}

console.log(findParent(root,'H'))


// 3. 扁平化这个对象
// 3-1 层序遍历
function flatten(obj){
    let arr=[obj]
    let res = []
    while(arr.length){
        let len = arr.length
        for(let i=0;i<len;i++){
            let cur=arr.shift()
            res.push({
                name:cur.name,
                age:cur.age
            })
            if(cur.children) arr.push(...cur.children)
        }
    }
    return res
}

// 3-2 递归遍历
function flatten2(obj){
    const res=[]
    function tranverse(curObj){
        res.push(curObj.name)
        if(curObj.children) curObj.children.forEach(child=>tranverse(child))
    }
    tranverse(obj)
return res
}
console.log(flatten(root))
console.log(flatten2(root))





