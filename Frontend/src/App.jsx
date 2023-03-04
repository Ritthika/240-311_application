import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)
  const [name , setName] =useState("TEST 240-311")
  
  const user = {
    firstName : "admin",
    lastName : "user",
    imgPic : "https://i.ytimg.com/vi/nvYmvrnod18/maxresdefault.jpg"
  }

  return (
    //react Fragment
    <> 
      <h1>WELLCOME TO MY APP</h1>
      <p>MY NAME is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width = "1280" height= "750" alt="" />
      <p>{name}</p>
      <MyButton />
    </>
  )
}

export default App
