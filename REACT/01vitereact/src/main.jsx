import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const anotherElement=(
    <a href="https://www.google.com" target="_blank">visit</a>
)
const user="kshitiz";
const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  },
  'visit google',
  user
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
