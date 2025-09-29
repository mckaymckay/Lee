// const dataSource = [
//     {
//         name: 'A',
//         age: 12,
//         children: [
//             {
//                 name: 'C',
//                 age: 16,
//                 children: [
//                     {
//                         name: 'F',
//                         age: 17,
//                     },
//                     {
//                         name: 'G',
//                         age: 18,
//                         children: [
//                             {
//                                 name: 'H',
//                                 age: 14,
//                             }
//                         ]
//                     },
//                 ],
//             },
//             {
//                 name: 'I',
//                 age: 15,
//             },
//         ],
//     },
//     {
//         name: 'B',
//         age: 13,
//         children: [
//             {
//                 name: 'D',
//                 age: 14,
//             },
//             {
//                 name: 'E',
//                 age: 15,
//             },
//         ],
//     },
// ]

// type ItemType={
//     name:string,
//     age:number,
//     children?:ItemType[],
//     _path?:string
// }

// // 扁平化这个对象，并且把在每个item中加一个参数path，显示它的路径
// function main(obj:ItemType[]):{[key :string]:ItemType} {
//     let queue:ItemType[] = obj?.map((v,index)=>({
//         ...v,
//         _path: `${index}`
//     }))
//     let res = new Map()
//     while (queue.length) {
//         let len = queue.length
//         for (let i = 0; i < len; i++) {
//             let item = queue.shift()
//             res.set(item?.name, item)
//             if (item?.children && item.children?.length) {
//                 item.children = item.children.map((v,index)=>({
//                     ...v,
//                     _path: item._path ? `${item._path}_children_${index}` : ''
//                 }))
//                 queue.push(...(item?.children||[]))
//             }
//         }
//     }
//     return Object.fromEntries(res)
// }

// console.log(main(dataSource));
console.log(2);