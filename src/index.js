import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Login from './pages/login'
import Home from './pages/home'
import User from './pages/user'

import './style/main.css'

import reportWebVitals from './reportWebVitals'
//TODO if time, create a 404 page
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<User />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
