import HomePage from "./Components/pages/home/HomePage"
import LoginPage from "./Components/pages/login/LoginPage"
import ErrorPage from "./Components/pages/error/ErrorPage"
import { Route, Routes } from "react-router-dom";
function App() {


  return (
   <Routes>
    <Route path="/" element ={<HomePage />}/>
    <Route path="/login" element ={<LoginPage/>}/>
    <Route path="/homePage/:username" element ={<HomePage/>}/>
    <Route path="/*" element ={<ErrorPage/>}/>

   </Routes>
  )
}

export default App
