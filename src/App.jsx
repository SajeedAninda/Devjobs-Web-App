import { Outlet } from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
