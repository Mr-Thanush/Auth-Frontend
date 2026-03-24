import {Routes,Route} from "react-router-dom"
import Register from './Pages/register.jsx'
import Login from './Pages/login.jsx'
import './App.css'
import Home from "./Pages/home.jsx"

function App() {


  return (
    
     
   <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>


   </Routes>
      
    
  )
}

export default App
