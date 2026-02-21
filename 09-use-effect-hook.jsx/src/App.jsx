import React, { useEffect } from 'react'
import Card from './components/Card'
import axios from 'axios'
import { useState } from 'react'
// https://jsonplaceholder.typicode.com/users
const App = () => {
  console.log("working")
  const [allUsers, setAllUsers] = useState([]);
  async function getData(){
    let userData = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAllUsers(userData.data)
  }
  useEffect(() => {
    getData()
  },[])
  
  return (
    <div>
      <div className="cardContainer">
        {allUsers.map((e)=>{
         return <Card name = {e.name} email = {e.email}></Card>
        })}
      </div>
    </div>    
  )
}


export default App
