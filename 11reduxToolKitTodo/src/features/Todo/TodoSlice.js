import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello"}] //2nd step:how initially the store will look like or will contain//
}

export const todoSlice=createSlice({ //3rd step:createSlice//
    name:'todo',
    initialState,
    reducers:{ //reducers will contain properties and functions//
        addTodo:(state,action)=>{ //you are bydefault given the access of state and action//
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        }, 

        /*state is a component's memory for data that changes over time(current data inside the state), 
        while actions are objects or functions that describe an intent to change that state*/

        removeTodo: (state, action) => {
  state.todos = state.todos.filter(
    todo => todo.id !== action.payload
  )
}

        },
    } 
)

//4th step: export all the functionalities 
export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer //you have to export all the slices you created and import in store//

