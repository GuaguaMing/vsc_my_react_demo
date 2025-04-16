//建立物件
//const obj1 ={
//  name: '小鳳',
//  age: '9',
//}

//一般寫法
//const name = obj1.name
//const age= obj1.age
//console.log(name,age)

//物件解構
//const {name,age} = obj1
//console.log(name,age)

//建立陣列
//const arr1 =['p1','p2','p3']

//一般寫法
//const pNo1=arr1[0]
//const pNo2=arr1[1]
//const pNo3=arr1[2]
//console.log(pNo1,pNo2,pNo3)

//陣列解構
//const [pNo1,pNo2,pNo3]=arr1
//console.log(pNo1,pNo2,pNo3)

const data = {
  s1: {
    id: 's001',
    subject: 'HTML',
    score: '100',
  },
  s2: {
    id: 's002',
    subject: 'HTML',
    score: '99',
  },
  s3: {
    id: 's003',
    subject: 'HTML',
    score: '98',
  },
}

//解構+展開(...other)
//解構s2,展開s1,s3
const { s2, ...other } = data
console.log(s2)
console.log(other)

//解構物件中的物件=>s2
const { id, subject, score } = s2
console.log(id, subject, score)

function App() {
  return (
    <>
      上課中...
    </>
  )
}


export default App