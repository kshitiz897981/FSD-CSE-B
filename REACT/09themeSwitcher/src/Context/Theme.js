import React from "react";
import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeContextProvider=ThemeContext.Provider 

export default function useTheme(){
    return useContext(ThemeContext)
}

// the functionality of the two empty functions above will be injected automatically as we have created the same name functions in app.jsx