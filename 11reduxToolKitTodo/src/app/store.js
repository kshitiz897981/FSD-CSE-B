import {configureStore} from '@reduxjs/toolkit' //first step:make the store//
import { todoSlice } from '../features/Todo/TodoSlice'
export const store=configureStore({
    reducer:todoSlice.reducer
})

/*If you have multiple slices:
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})
*/