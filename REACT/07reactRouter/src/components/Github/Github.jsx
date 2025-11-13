import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/kshitiz897981')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4 '>Github Followers:{data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default Github

 export const githubInfoLoader=async()=>{
     const response=await fetch('https://api.github.com/users/kshitiz897981')
     return response.json()
 }