import { useCallback, useState ,useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numbersAllowed,setNumbersAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook does not cause re-renders
  const passwordRef=useRef(null)//useRef takes any default value,here we have given null

  //useCallback  takes a function and an array of dependencies for which you have to memoize the function
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str+="0123456789"

    if(charAllowed) str+="#$*!@%^&"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },
  [length,numbersAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select(); //The ?. prevents errors in case passwordRef.current is still null
    passwordRef.current?.setSelectionRange(0,16); //selects a range 
    window.navigator.clipboard.writeText(password)},//copies password in clipboard
    [password])

  //useEffect takes a function and an array of dependencies so whenever there is a change in dependencies , function is triggered
  useEffect(()=>{passwordGenerator()},[length,numbersAllowed,charAllowed,passwordGenerator])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly 
          ref={passwordRef}/>
<button 
onClick={copyPasswordToClipboard}
className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center'>
  <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
<label>Length:{length}</label>
</div>
<div className='flex items-center gap-x-1'>
  <input type='checkbox' defaultChecked={numbersAllowed} id='numberInput' onChange={()=>{setNumbersAllowed((prev)=>!prev);

  }}/>
  <label htmlFor='numberInput' >Numbers</label>
</div>
<div className='flex items-center gap-x-1'>
  <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={()=>{setCharAllowed((prev)=>!prev);

  }}/>
  <label htmlFor='characterInput' >Characters</label>
</div>
</div>
       </div>
    </>
  )
}

export default App
