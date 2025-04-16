import { useState } from "react";
//建立元件(字首名稱大寫)
function Card({ person }) {
  //解構資料
  return (
    <div className="card">
      <div className="card-body">
        我是{person.name},今年{person.age}歲
      </div>
    </div>
  )
}
function App() {
  //取出特定值作為變數

  /* 
  const person = {
    name: '阿達',
    age: '8',
  } */

  //一般寫法
  /* 
  const name = person.name;
  const age = person.age;
  console.log(name,age); */

  //物件解構
  /* 
  const { name, age } = person;
  console.log(name, age); */

  const [person,setPerson]=useState({
    name: '小鳳',
    age: '9',
  });

  return (
    <>
    {/* 第一個person => 元件屬性 */}
    {/* 第二個person => 變數(可以是任何形式) */}
      <Card person={person}></Card>
      <Card person={person}/>
    </>
  )
}
export default App