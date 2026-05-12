
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
//useState is a hook
//useState propagates the updated value to UI
// it returns an array with two values 
// at 0th index is counter (let be a variable) and other is a function setCounter
//useState takes any default value as argument


function App() {

  const[counter,setCounter]=useState(10);//dont take it as const otherwise value will not be updated

  const addvalue=()=>{
    setCounter(counter+1)
  }
  const decreasevalue=()=>{
    if(counter!=0)
    setCounter(counter-1)
  }

  return (
    <>
   <h1>HELLO WORLD</h1>
   <h2>counter value:{counter}</h2>
   <button onClick={addvalue}>increase value</button>
   <br/>
   <button onClick={decreasevalue}>decrease value</button>
        
    </>
  )
}

export default App
