import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl'>User:{id}</div>
  )
}

export default User

/*useParams is a hook provided by React Router DOM that allows functional components to access dynamic parameters 
from the current URL. It is essential for building dynamic routes where parts of the URL represent specific data, 
such as an item ID or a username.*/