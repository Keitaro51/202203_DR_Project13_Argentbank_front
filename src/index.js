import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './utils/store'
import { QueryClient, QueryClientProvider } from 'react-query'

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Transaction from './pages/Transaction'

import './style/main.css'

import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/transaction/:id" element={<Transaction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
