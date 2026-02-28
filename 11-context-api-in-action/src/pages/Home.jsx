import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='h-full' >
      <header className='bg-violet-500 text-2xl p-5 text-center font-bold underline' >
        Home Page
      </header>
      <button onClick={()=>{navigate('/product')}} className='font-bold bg-violet-500 px-10 py-3 absolute top-[50%] left-[50%] translate-[-50%] rounded ' >Explore Products</button>
    </div>
  )
}

export default Home
