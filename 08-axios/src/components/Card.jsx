import React from 'react'

const Card = ({name,email}) => {
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    const bgColor = `rgb(${c1}, ${c2}, ${c3})`
  return (
    <div style={{backgroundColor:bgColor}} className='card' >
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}

export default Card
