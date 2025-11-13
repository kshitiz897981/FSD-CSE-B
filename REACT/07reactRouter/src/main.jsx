import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

/* Another way to create router 
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact" ,
        element:<Contact/>
      }
    ]
  }
])
*/ 



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='' element={<Home/>}/>
       <Route path='user/:id' element={<User/>}/>
{/*syntax for any path such as user/1. is user/:id*/}
<Route path='/github'
 element={<Github/>}
  loader={githubInfoLoader}
  
 />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>     
  </StrictMode>
)
//we will not be rendering App bcz we have inserted react router

//RouterProvider takes a prop (router)

//createBrowserRouter is a method which takes an array in which we list all the objects that we want

//path is the top level element and other elements are nested into this

/*loader optimises in such a way that whenever you move cursor to that component it starts fetching data from api or calls the api
 you can directly call the api inside the loader or you can make a function in the same component and then use it in loader*/

 /*The useLoaderData hook in React Router DOM  provides access to data that has been pre-fetched
  by a route's loader function. This allows for data to be available to a component before it renders, improving 
  perceived performance.*/ 

  /* Note:if you want more nesting such as /about/kshitiz , means you want nesting in About , you can make About a  
  closing tag (not a self closing one)and then use route in it .
  <Route path='/about' element={<About/>}/>
  <Route........../>
  </Route>
  jisme nesting chahiye use normal tag banaao aur bakiyo ko self closing tag
  */