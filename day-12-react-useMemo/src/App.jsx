import React , {useState} from 'react'
import "./App.css"
import About from './component/About'
const App = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name : "Bharat",
    id : 33
  })

  console.log("app re-rendering")
  return (
    <div>
      
      <div>count - {count}</div>
      <button onClick={()=>setCount(count+1)} >increment</button>

      <div>user - {user.name}</div>

      <button onClick={()=>{setUser({...user,name:"rahul"})}} >change name</button>

      <About count={count} user={user} />
    </div>
  )
}

export default App