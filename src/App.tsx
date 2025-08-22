import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import Sign_Up from './Pages/Sign_Up'
import Service from './Pages/Service'
import ProductDetails from './Pages/ProductDetails'
import Footer from './Components/Footer'
import LoginPage from './Pages/LoginPage'
import CheckOutPage from './Pages/CheckOutPage'

function App() {
  const location = useLocation()
  const hideHeaderRoutes = ['/login', '/signup']
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname)

  return (
    <div className='min-h-screen flex flex-col'>
      {!shouldHideHeader && <Header />}

      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<Sign_Up />} />
          <Route path='/service' element={<Service />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='checkout/:id' element={<CheckOutPage />} />
        </Routes>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
