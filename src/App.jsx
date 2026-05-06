// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hjem from './pages/Hjem'
import Byer from './pages/Byer'
import Tromso from './pages/Tromso'
import Bergen from './pages/Bergen'
import Oslo from './pages/Oslo'
import Trondheim from './pages/Trondheim'
import Stavanger from './pages/Stavanger'
import Kristiansand from './pages/Kristiansand'
import Pubcrawl from './pages/Pubcrawl'
import PubcrawlTromso from './pages/PubcrawlTromso'
import Omoss from './pages/Omoss'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/byer" element={<Byer />} />

        {/* Bysider */}
        <Route path="/byer/tromso" element={<Tromso />} />
        <Route path="/byer/bergen" element={<Bergen />} />
        <Route path="/byer/oslo" element={<Oslo />} />
        <Route path="/byer/trondheim" element={<Trondheim />} />
        <Route path="/byer/stavanger" element={<Stavanger />} />
        <Route path="/byer/kristiansand" element={<Kristiansand />} />

        {/* Pubcrawl-sider */}
        <Route path="/pubcrawl" element={<Pubcrawl />} />
        <Route path="/pubcrawl/tromso" element={<PubcrawlTromso />} />

        <Route path="/omoss" element={<Omoss />} />

        {/* Auth-sider */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App