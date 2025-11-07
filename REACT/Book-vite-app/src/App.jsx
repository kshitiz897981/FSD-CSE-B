import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Book({name,price,src}) {
  

  return (
    < div className='card'>
  <img src={src} width="200" height="200" alt='book image'/>
  <h3>Title:{name}</h3>
  <h4>Price:{price}</h4>
  <button>Add to Cart</button>
    </div>
  )
}

export default Book

