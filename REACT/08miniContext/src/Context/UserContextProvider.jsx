import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider=({children})=>{
    const [user,setUser]=useState([])
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider

//children are the components here that will be wrapped inside the usercontextProvider 
//Inside the value , we pass an object of the data that we want to pass into the components
/*user and setUser are not the data themselves — they’re the tools (the state system) React gives you to store, carry, and 
update your data safely and globally.*/