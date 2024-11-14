import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/login/LoginPage"
import ErrorPage from "./pages/error/ErrorPage"
import { Route, Routes } from "react-router-dom";
import BasketPage from "./pages/Basket/BasketPage";
import AboutPage from "./pages/about/AboutPage";
import EventPage from "./pages/event/EventPage"
import CompanyPage from "./pages/company/CompanyPage";
import OrderPage from "./pages/order/OrderPage";
import ProductOption from "./pages/order/select/ProductOption";
import ScrollToTop from "./utils/scrollToTop";
import NewsPage from "./pages/news/NewsPage";
import { OrderProvider } from "./context/OrderContext";
function App() {


  return (
    <>
    <OrderProvider> {/* Encapsuler toute l'application avec OrderProvider */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home/:FirstName" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<ProductOption />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </OrderProvider>
    </>
  )
}

export default App
