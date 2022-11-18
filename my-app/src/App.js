import React from 'react'
import { Route,Routes, } from 'react-router-dom'
import Aboutpage from './pages/Aboutpage'
import Coursepage from './pages/Coursepage'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './Components/Footer'
import Features from './pages/Features'
import Details from './pages/Details'
import Instructors from './pages/Instructors'
import Testimonial from './pages/Testimonial'




const App = () => {
  return (
    
    <div>
  
      <>
      <Navbar/>
     
        <Routes>
        <Route path='/' element={<Homepage/>}/>
          <Route  path='/aboutpage' element={<Aboutpage/>} />
          <Route  path='/coursepage' element={<Coursepage/>} />
          <Route  path='/contact' element={<Contact/>} />
         <Route path='/details'  element={<Details/>} />
         <Route path='/features'  element={<Features/>} />
         <Route path='/instructors'  element={<Instructors/>} />
         <Route path='/testimonials'  element={<Testimonial/>} />
        </Routes>
   
    <Footer/>
      </>
      
      </div>
  )
}

export default App
