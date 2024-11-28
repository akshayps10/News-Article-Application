import React from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignUpForm from './auth/forms/SignUpForm'
import SigninForm from './auth/forms/SigninForm'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NewsArticles from './pages/NewsArticles'


const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/sign-in" element={<SigninForm/>}/>
    <Route path="/sign-up" element={<SignUpForm/>}/>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/news" element={<NewsArticles/>} />
   
        
  </Routes>
  </BrowserRouter>
  )
}

export default App
