import HomePage from "./Components/pages/home/HomePage"
import LoginPage from "./Components/pages/login/LoginPage"
import ErrorPage from "./Components/pages/error/ErrorPage"
import { Route, Routes } from "react-router-dom";
import BasketPage from "./Components/pages/Basket/BasketPage";
import AboutPage from "./Components/pages/about/AboutPage";
import EventPage from "./Components/pages/event/EventPage"
import CompanyPage from "./Components/pages/company/CompanyPage";
import OrderPage from "./Components/pages/order/OrderPage";
import ProductOption from "./Components/pages/order/select/ProductOption";
import ScrollToTop from "./utils/scrollToTop";
import NewsPage from "./Components/pages/news/NewsPage";
function App() {


  return (
    <>
    <ScrollToTop/>
   <Routes>
    <Route path="/" element ={<HomePage />}/>
    <Route path="/login" element ={<LoginPage/>}/>
    <Route path="/home/:FirstName" element ={<HomePage/>}/>
    <Route path="/basket" element ={<BasketPage/>}/>
    <Route path="/event" element ={<EventPage />}/>
    <Route path="/company" element ={<CompanyPage/>}/>
    <Route path="/about" element ={<AboutPage/>}/>
    <Route path="/product" element ={<ProductOption/>}/>
    <Route path="/news" element ={<NewsPage/>}/>
    <Route path="/order" element ={<OrderPage/>}/>
    <Route path="/*" element ={<ErrorPage/>}/>

   </Routes>
   </>
  )
}

export default App
