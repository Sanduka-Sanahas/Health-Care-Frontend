import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Info from './components/Info'
import About from './components/About'
import Appointment from './components/Appointment'
import Review from './components/Review'
import Doctor from './components/Doctor'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AOS from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{

    AOS.init();
},[])

  return (

    <div>

      {/* <Navbar></Navbar> */}
      {/* <Hero></Hero> */}
      {/* <Demo></Demo> */}
      {/* <Info></Info> */}
      {/* <About></About> */}
      {/* <Appointment></Appointment> */}
      {/* <Review></Review> */}
      {/* <Doctor></Doctor> */}
      {/* <Footer></Footer> */}



      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/information' element={<Info />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Appointment' element={<Appointment />}></Route>
        <Route path='/Review' element={<Review />}></Route>
        <Route path='/Doctor' element={<Doctor />}></Route>
        <Route path='/Footer' element={<Footer />}></Route>


      </Routes>




    </div>
  )
}

export default App
