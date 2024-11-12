import { Outlet } from "react-router-dom"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import ScrollToTop from "./Components/ScrollToTop"

function App() {

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
