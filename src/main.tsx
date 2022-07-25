import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import eruda from 'eruda'

import { App } from './App'
import { CartProvider } from './hooks/useCart'
import { GeoLocationProvider } from './hooks/useGeolocation'
import { defaultTheme } from './assets/themes/default-theme'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeoLocationProvider>
      <CartProvider>
        <ChakraProvider theme={defaultTheme}>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </ChakraProvider>
      </CartProvider>
    </GeoLocationProvider>
  </React.StrictMode>
)

if (import.meta.env.DEV) {
  eruda.init()
}
