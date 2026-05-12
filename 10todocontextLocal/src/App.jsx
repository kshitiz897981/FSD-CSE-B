import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoItem,TodoForm } from './components'

function App() {

  const [todos,setTodos]=useState([])//here todos are all the todos,not a single todo//

  const addTodo=(todo)=>{
     setTodos((prev)=>([{id:Date.now(),...todo} ,...prev]//merging the new todo with the previous todos
     ))
  }
    /*if we directly write here settTodos(todo), then all the pre-existing todos will be overwritten 
    therefore we have to pass a callback in whuch we get (prev) as an argument which give us the old 
    values or array*/

     const updateTodo=(id,todo)=>{ //we have to find the todo that we have to update by matching the id//
         setTodos((prev)=>
            prev.map((prevTodo)=>(prevTodo.id===id ?todo : prevTodo))
         )
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))//jin jinse id match ni ho ri unhe rakhlo//
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ?{...prevTodo,completed:!prevTodo.completed} :prevTodo))
  } //jisse id match hogyi,uski completed value ko toggle kardo aur baki poore ko as it is rakhdo//
   
 useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))//localStorage always works with strings,so we have to convert into JSOn//

    if(todos&&todos.length>0){
      setTodos(todos)
    }
 },[])

 useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])

  return (
 <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
  <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/> 
              </div>
           ))}
          </div>
   </div>
  </div>
</TodoProvider>
  )
}

export default App
