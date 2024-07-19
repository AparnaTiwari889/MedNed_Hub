import { useState } from 'react'
import { Routes, Route,Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import PrivateRoute from './PrivateRoute'
import Footer from './components/Footer'
import MedPage from './pages/MedPage'
import TestLabPage from './pages/TestLabPage'
import HealthCare from './pages/HealthCare'
import HealthBlogs from './pages/HealthBlogs'
import PlusPage from './pages/PlusPage'
import OffersPage from './pages/OffersPage'
import ValueStorePage from './pages/ValueStorePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
        <Route path="/loginpage" element={ <LoginPage /> } />
        <Route path="/medpage" element={<MedPage />} />
        <Route path="/Testlab" element={<TestLabPage/>}/>
        <Route path="/Healthcare" element={<HealthCare/>}/>
        <Route path="/HealthBlogs" element={<HealthBlogs/>}/>
        <Route path="/Plus" element={<PlusPage/>} />
        <Route path="/Offers" element={<OffersPage/>} />
        <Route path="/ValueStore" element={<ValueStorePage/>} />
        
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
