import { useState } from 'react'
import './App.css'
import LoginPage from './LoginPage'

export default function App() {
  const [user, setUser] = useState("Jasio")

  const [n, setN] = useState(0)

// let b = 0;

function handleClick()
{
  setUser("Piotr")
  setN(n+2)
  
}

  
  return (
    
    <>
    
    <h3 style = {{ color: n > 10 ? "red": "white" }}> 
      Aktualny numer : {  n<10 ? (<h1>{n}</h1>)  :   (<h2>{n}</h2>)  }
    </h3>
    
    Użytkownik<h3>{user}</h3>
    <button onClick={handleClick}> ClickMe </button>
    
    {/* <LoginPage/> */}
{/* 
{b}
    
{b == 0 ? (<h1>Nie ma</h1>) : (<LoginPage/>) } */}

    
   
   
    </>
  
  )
}


