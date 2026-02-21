import React from 'react'

const Card = ({ user }) => {
  return (
    <div
      className="p-5 h-90 bg-center bg-cover rounded-xl
      flex flex-col justify-end items-center gap-0.5"
      style={{ backgroundImage: `url(${user.url})` }}
    >
        <h1 className='text-xl text-[crimson] font-bold'>{user.name}</h1>
        <p className='text-xl text-[crimson] font-bold'>{user.email}</p>
    </div>
  )
}

export default Card
