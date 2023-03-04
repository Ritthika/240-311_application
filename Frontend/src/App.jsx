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
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  return (
    //react Fragment
    <> 
      <h1>WELLCOME TO MY APP</h1>
      <p>MY NAME is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width = "1280" height= "750" alt="" />
      <p>{name}</p>
      <MyButton />
      <ul>
        {products.map(product =>(
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
