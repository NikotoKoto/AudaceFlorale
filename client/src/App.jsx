import HomePage from "./Components/pages/home/HomePage"
import LoginPage from "./Components/pages/login/LoginPage"
import ErrorPage from "./Components/pages/error/ErrorPage"
import { Route, Routes } from "react-router-dom";
import BasketPage from "./Components/pages/Basket/BasketPage";
import MourningPage from "./Components/pages/mourning/Mourning";
import AboutPage from "./Components/pages/about/AboutPage";
import WeddingPage from "./Components/pages/wedding/WeddingPage"
import CompanyPage from "./Components/pages/company/CompanyPage";
import OrderPage from "./Components/pages/order/OrderPage";
import ProductOption from "./Components/pages/order/select/ProductOption";
function App() {


  return (
   <Routes>
    <Route path="/" element ={<HomePage />}/>
    <Route path="/login" element ={<LoginPage/>}/>
    <Route path="/home/:FirstName" element ={<HomePage/>}/>
    <Route path="/basket" element ={<BasketPage/>}/>
    <Route path="/mourning" element ={<MourningPage/>}/>
    <Route path="/wedding" element ={<WeddingPage />}/>
    <Route path="/company" element ={<CompanyPage/>}/>
    <Route path="/about" element ={<AboutPage/>}/>
    <Route path="/product" element ={<ProductOption/>}/>
    <Route path="/order" element ={<OrderPage/>}/>
    <Route path="/*" element ={<ErrorPage/>}/>

   </Routes>
  )
}

export default App
