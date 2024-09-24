import HomePage from "./Components/pages/home/HomePage"
import LoginPage from "./Components/pages/login/LoginPage"
import ErrorPage from "./Components/pages/error/ErrorPage"
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Components/pages/about/AboutPage";
import BasketPage from "./Components/pages/basket/BasketPage"
import MourningPage from "./Components/pages/mourning/MourningPage";
import CompanyPage from "./Components/pages/company/CompanyPage";
import WeddingPage from "./Components/pages/wedding/WeddingPage"
import OrderPage from "./Components/pages/order/OrderPage";
function App() {


  return (
   <Routes>
    <Route path="/" element ={<HomePage />}/>
    <Route path="/login" element ={<LoginPage/>}/>
    <Route path="/home/:username" element ={<HomePage/>}/>
    <Route path="/about" element ={<AboutPage/>}/>
    <Route path="/order" element ={<OrderPage/>}/>
    <Route path="/basket" element ={<BasketPage/>}/>
    <Route path="/wedding" element ={<WeddingPage/>}/>
    <Route path="/company" element ={<CompanyPage/>}/>
    <Route path="/mourning" element ={<MourningPage/>}/>
    <Route path="/*" element ={<ErrorPage/>}/>

   </Routes>
  )
}

export default App
