import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { SucceedOrder } from './pages/succeed-order'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { NotFound } from './pages/404'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/succeed" element={<SucceedOrder />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
