import { Route, Routes } from 'react-router-dom'

import { HeaderLayout } from '../layout/HeaderLayout'

import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { Success } from '../pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucesso" element={<Success />} />
      </Route>
    </Routes>
  )
}
