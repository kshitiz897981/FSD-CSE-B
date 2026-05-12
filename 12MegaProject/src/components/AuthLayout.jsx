import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

/*
authentication value	        Meaning
    true	                    This route is protected (login required)
    false	                    This route is public / auth-only (login, signup pages)
*/

export default function Protected({children,authentication=true}) {
    const navigate=useNavigate()
    const[loader,setLoader]=useState(true)
    const authStatus=useSelector((state)=>state.auth.status)

        useEffect(()=>{
            if(authentication && authStatus!==authentication){
              navigate("/login")
            }
            else if(!authentication && authStatus!==authentication){
              navigate("/")
            }
            setLoader(false)
        },[authStatus,navigate,authentication])
    
  return loader?<h1>Loading...</h1>:<>{children}</>
}

