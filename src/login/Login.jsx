import { useState } from "react"
import { Navigate } from "react-router-dom"
import "./Login.css"

export default function Login({setUsername}){
  const [input, setInput] = useState("")
  const [login, setLogin] = useState(false)

  function handleLogin(){
    console.log(input)
    if (input.trim() !== "") {
      setUsername(input); 
      localStorage.setItem("username", input);
    }
  }

  function formSubmit(){
    setLogin(true)
  }

  return (
    <>
    
    <div id="main">
    {login && <Navigate to="/route-2"/>}
    <div className="searchBar">
          <input type="search" id="search" name="search" placeholder="search..."/>
        </div>
      <div className="container">
        <h2>User Form</h2>
        <div className="Form">
          <form action="" style={{height:"100%",width:"100%"}} onSubmit={formSubmit}>
            <div>
              <label htmlFor="name">Name:</label><br/>
              <input type="text" id="name" value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number:</label><br/>
              <input type="tel" id="mobile" />
            </div>
            <button onClick={handleLogin}>Submit</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}