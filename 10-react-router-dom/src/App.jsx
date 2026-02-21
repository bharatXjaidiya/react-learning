import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import MentorsContact from './pages/MentorsContact'
import AuthoritiesContact from './pages/AuthoritiesContact'
import SomeCourses from './pages/SomeCourses'
import CoursesDetails from './pages/CoursesDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* basic routing */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/courses" element={<Courses/>}/>

        {/* Nested routing */}
        <Route path='/contacts/mentors' element={<MentorsContact/>} />
        <Route path='/contacts/authorities' element={<AuthoritiesContact/>}/>

        {/* dynamic routing */}
        <Route path='/courses/:id' element ={<SomeCourses/>} />

        {/* nested dynamic routing */}
        <Route path='/courses/:id/detail' element={<CoursesDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
