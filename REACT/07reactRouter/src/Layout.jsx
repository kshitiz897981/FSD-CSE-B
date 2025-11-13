import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout

//in this project we want to keep the Header and Footer constant in all and then pass the other components dynamically
//for this we will be using Outlet
//for using Outlet,we have to tell the index file that we are using the Layout and using all the other components into this
