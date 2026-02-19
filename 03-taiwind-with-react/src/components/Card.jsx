import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div className='w-2xs border-3 border-[crimson] bg-white rounded-2xl overflow-hidden'>
        <div className="cardBg w-full flex justify-center  bg-amber-700 ">
            <img loading='lazy' className='w-[33.3%]  h-25  object-cover' src={data.backgroundImages[0]} alt="" />
            <img loading='lazy' className='w-[33.3%]  h-25 object-cover' src={data.backgroundImages[1]} alt="" />
            <img loading='lazy' className='w-[33.3%] h-25 object-cover' src={data.backgroundImages[2]} alt="" />
        </div>
        <div className="profile-pic flex items-center justify-end gap-15 px-7 relative bottom-5">
            <img loading='lazy' src={data.profileImage} alt="" className="userImg loading='lazy' w-22 h-22 object-cover rounded-[50%] border-3 border-[crimson]" />
            <h1>...</h1>
        </div>
            
        <div className="centerInfo text-center">
            <p className="userName font-bold text-2xl" >{data.username}</p>
            <p className="userId text-gray-400">{data.userEmailId}</p>
            <p className="description">{data.description}</p>
        </div>
        <div className="bottomInfo flex justify-center items-center gap-10">
            <div className="media">
                <h3>{data.media}</h3>
                <h3>Media</h3>
            </div>
            <div className="followers">
                <h3>{data.followers}</h3>
                <h3>followers</h3>
            </div>
            <div className="following">
                <h3>{data.following}</h3>
                <h3>following</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
