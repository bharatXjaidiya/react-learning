import React, { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Card from './component/Card.jsx'
const App = () => {

  const [allUsers, setAllUsers] = useState([{
    name: "Bharat",
    email: "jaidiya@bharat.com",
    url: "https://i.pinimg.com/736x/88/ed/bd/88edbdbec8cac06a7032c5d6f56cf9a4.jpg"
  }])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    let newUser = {name,email,url };
    setAllUsers([...allUsers,newUser]);
  }

  function changeHandler(e) {
    if (e.target.name === "name") {
      setName(e.target.value)
    }
    else if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    else {
      setUrl(e.target.value)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="cardContainer w-full p-5 flex gap-1 overflow-scroll">
        {allUsers.map((e,idx) => {
          return <Card key={idx} user={allUsers[idx]} />
        })}
      </div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex flex-col justify-center items-center gap-3 w-fit mx-auto p-5 rounded-2xl'>
        <input onChange={(e) => { changeHandler(e) }} name='name' className='text-[crimson] font-bold px-7 py-3 border-none outline-2 outline-[crimson] rounded-2xl' placeholder='Name' type="text" />
        <input onChange={(e) => { changeHandler(e) }} name='email' className='text-[crimson] font-bold px-7 py-3 border-none outline-2 outline-[crimson] rounded-2xl' type="email" placeholder='email' />
        <input onChange={(e) => { changeHandler(e) }} name='url' className='text-[crimson] font-bold px-7 py-3 border-none outline-2 outline-[crimson] rounded-2xl' type="url" placeholder='profil-pic' />
        <button className='bg-[crimson] px-7 py-3 font-bold rounded-xl active:scale-95' >Submit</button>
      </form>
    </div>
  )
}

export default App
