import { useContext } from 'react'

import { ShoppingCartContext } from '../contexts/ShoppingCart'

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
