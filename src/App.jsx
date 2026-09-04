import {useState} from "react";
import Count from "./Count"

function App(){
  const [fruit , setFruit] = useState("Apple");

  const handleFruit=()=>{
    setFruit("Orange");
  }

  return(
    <>
    <h1>Welcome to React</h1>
    <h2>My favorite fruit is {fruit}</h2>
    <button onClick={handleFruit}>Change Fruit</button>
    <Count/>
    </>
  )
}

export default App