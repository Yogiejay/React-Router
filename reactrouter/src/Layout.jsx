import React from 'react'
import Footer from './component/Footer/Footer'
import Navbar from './component/Header/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout