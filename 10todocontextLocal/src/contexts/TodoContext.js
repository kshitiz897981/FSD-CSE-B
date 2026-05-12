import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id: 1,
            todo:" msg",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext) //this will export the whole TodoContext all in once//
}

export const TodoProvider=TodoContext.Provider