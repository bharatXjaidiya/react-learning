import React ,{useState} from 'react'
import Men from './components/Men.jsx'
import Women from './components/Women';
const App = () => {
  const [gender, setGender] = useState("")
  function getRandom(){
    let r = Math.floor(Math.random()*10);
    if(r>4){
     setGender("male")
    }
    else{
    setGender("female")
    }
  }

  let arr = ["bharat","rohan","sarthat","harsh","abhishek"]
  return (
    <div>
      {/* conditional rendering */}
      {gender === "male" ? <Men/> : <Women/>}
      <button onClick={getRandom} className='bg-green-700 py-3 px-7 font-bold active:scale-95 rounded'>click</button>

      {/*list rendering*/}
      {arr.map((e)=>{
      return e==="bharat" ? <h1 className='bg-red-700'>{e}</h1> : <h2>{e}</h2>
      })}
      
    </div>
  )
}

export default App
