import React from 'react'

const Card = ({ user,allUsers,deleteHandler,idx}) => {

  return (
    <div
      className="p-5 h-90 bg-center bg-cover rounded-xl
      flex flex-col justify-end items-center gap-0.5"
      style={{ backgroundImage: `url(${user.url})` }}
    >
        <h1 className='text-xl text-[crimson] font-bold'>{user.name}</h1>
        <p className='text-xl text-[crimson] font-bold'>{user.email}</p>
        <p onClick={()=>{
          deleteHandler(idx)
        }} className='bg-[crimson] cursor-pointer active:scale-95 rounded px-3 py-1 font-bold' >delete</p>
    </div>
  )
}

export default Card
