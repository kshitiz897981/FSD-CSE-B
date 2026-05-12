import React from "react";

const UserContext=React.createContext()

export default UserContext;



/*useContext is a React hook that allows components to access data from a React Context, avoiding the need 
to pass props down through multiple levels of the component tree. To use it, first create a context using createContext,
 then wrap a portion of your component tree in a Context.Provider to make the data available, and finally, use the
  useContext hook within any child component to read the context value. */
