import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { App } from './App'
import { CartProvider } from './hooks/useCart'
import { GeoLocationProvider } from './hooks/useGeolocation'
import { defaultTheme } from './assets/themes/default-theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeoLocationProvider>
      <CartProvider>
        <ChakraProvider theme={defaultTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </CartProvider>
    </GeoLocationProvider>
  </React.StrictMode>
)
