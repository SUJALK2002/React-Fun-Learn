import './App.css'

import {User} from './User.jsx'

function App() {

  let clge=['BMSIT','RVCE','PESIT','MSRIT']

  let userObj1 = {
    name:"Phipoli",
    age:"12",
    mail:"p@gmail.com",
  }

  let userObj2 = {
    name:"Phipoli2",
    age:"13",
    mail:"p2@gmail.com"
  }

  let userObj3 = {
    name:"Phipoli3",
    age:"14",
    mail:"p3@gmail.com"
  }

  return (
    <>
      <h1>Props Learning!!</h1>
      <User user = {userObj1}/>
      <User user = {userObj2}/>
      <User user = {userObj3}/>
    </>
  )
}

export default App
