import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import BasketProvider from './context/BasketContext.jsx'
import WishlistProvider from './context/WishListConText.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
    <App />
        </WishlistProvider>
      </BasketProvider>
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
