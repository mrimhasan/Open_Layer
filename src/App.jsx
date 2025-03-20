import { useEffect,useState } from 'react'
import Mape from './map/Map'
import Login from './login/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
 // const [username, setUsername] = useState("Please login first")
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "Please Login First"
  );

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "Please Login First");
  }, []);
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login setUsername={setUsername}/>} />
      <Route path="route-2" element={<Mape username={username}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
