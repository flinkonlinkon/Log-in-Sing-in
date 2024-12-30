import Lottie from "lottie-react";
import Lot from './Lot.json'
import LogIn from "./Components/LogIn";
import SingUp from "./Components/SingUp";
import Home from "./Components/Home";
import { Outlet } from "react-router-dom";


function App() {
 
  return (
    <>
    
    <Outlet></Outlet>

      
    </>
  )
}

export default App
