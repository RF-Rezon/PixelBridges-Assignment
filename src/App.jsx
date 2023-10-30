import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className='bg-base-theme'>
      <div className='max-w-full md:max-w-6xl mx-auto'><Outlet/></div>
    </div>
    <Footer/>
    </>
  )
}

export default App
