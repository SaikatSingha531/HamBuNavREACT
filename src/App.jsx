import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar'
import About from './assets/Components/About'
import ThiNav from './assets/Components/ThiNav'
// import SceNav from './assets/Components/About'

function App() {

  return (
    <>
    {/* <SceNav/> */}
    <ThiNav/>
    <Navbar/>
    <About/>
    </>
  )
}

export default App
