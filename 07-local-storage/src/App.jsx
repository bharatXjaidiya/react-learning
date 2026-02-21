import React, { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Card from './component/Card.jsx'
const App = () => {
  
  const localData = JSON.parse(localStorage.getItem('allUsers'))||[];
  
  const [allUsers, setAllUsers] = useState(localData)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");                                                                                                                                 
  function submitHandler(e) {
    e.preventDefault();
    let newUser = {name,email,url };
    let oldUsers = [...allUsers];
    oldUsers.push(newUser);
    setAllUsers(oldUsers);
    localStorage.setItem('allUsers',JSON.stringify(oldUsers));
    setName('');
    setEmail('');
    setUrl('');
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
  function deleteHandler(idx){
    console.log(idx)
    let copyUsers = [...allUsers];
    copyUsers.splice(idx,1);
    setAllUsers(copyUsers);
    localStorage.setItem('allUsers',JSON.stringify(copyUsers))
  }
  return (
    <div>
      <Navbar />
      <div className="cardContainer p-5 flex gap-1 overflow-scroll">
        {allUsers.map((e,idx) => {
          return <Card key={idx} user={e} deleteHandler ={deleteHandler} idx={idx} />
        })}
      </div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex flex-col justify-center items-center gap-3 w-fit mx-auto p-5 rounded-2xl'>
        <input value={name} onChange={(e) => { changeHandler(e) }} name='name' className='text-[crimson] font-bold px-7 py-3 border-none outline-2 outline-[crimson] rounded-2xl' placeholder='Name' type="text" />
        <input value={email} onChange={(e) => { changeHandler(e) }} name='email' className='text-[crimson] font-bold px-7 py-3 border-none outline-2 outline-[crimson] rounded-2xl' type="email" placeholder='email' />
        <input value={url} onChange={(e) => { changeHandler(e) }} name='url' className='text-[crimson] font-bold px-7 py-3 border-none outline-2 outline-[crimson] rounded-2xl' type="url" placeholder='profil-pic' />
        <button className='bg-[crimson] px-7 py-3 font-bold rounded-xl active:scale-95' >Submit</button>
      </form>
    </div>
  )
}

export default App
