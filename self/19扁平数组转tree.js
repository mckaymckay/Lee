// 链接：https://juejin.cn/post/7107500406430760991

// interface ArrayItem {
//   id: number;
//   name: string;
//   pid: number;
// }

// interface TreeItem extends ArrayItem {
//   children?: TreeItem[];
// }

// 输入
const list = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
];

// 输出
const result = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [
              {
                id: 5,
                name: '部门5',
                pid: 4,
              },
            ],
          },
        ],
      },
    ],
  },
];


function tree(list) {
  const res = []
  const map = new Map()
  list.forEach(item => {
    map.set(item.id, item)
  })
  list.forEach(item => {
    const parent = map.get(item.pid)
    if (parent) {
      parent.children ? parent.children.push(item) : parent.children = [item]
    } else {
      res.push(item)
    }
  })
  return res
}

console.log(92, tree(list))

function toRoot(list){
  let itemsMap=new Map()
  let res=[]
  for(let item of list){
    itemsMap.set(item.id,item)
  }
  for (let item of list){
    const parent = itemsMap.get(item.pid)
    if(parent){
      parent?.children?parent.children.push(item):parent.children=[item]
    }else{
      res.push(item)
    }
  }
  return res
}
