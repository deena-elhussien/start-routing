import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'

function App() {
const routes= createBrowserRouter([
  {path:"" , element: <Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"about", element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact", element:<Contact/>},
    // {path:"*", element:<NotFound/>},
  ]}
])

  return (
    <RouterProvider router={routes}>
      <Layout/>
    </RouterProvider>
  )
}

export default App
