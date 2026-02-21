import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-5 justify-center' >
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contacts"}>Contact</Link>
      <Link to={"/courses"}>Courses</Link>
    </div>
  )
}

export default Navbar
