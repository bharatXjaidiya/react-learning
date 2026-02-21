import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <button onClick={()=>{setCount(count+1)}} className='bg-pink-600 px-7 py-3 rounded-2xl active:scale-95 hover:bg-pink-800'>count {count}</button>
    </div>
  )
}

export default App
