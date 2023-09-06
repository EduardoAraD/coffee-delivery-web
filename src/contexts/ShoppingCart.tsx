import { ReactNode, createContext, useReducer } from 'react'

import {
  createNewItemShoppingCartAction,
  removeItemShoppingCartAtion,
  updateAmoutInItemShoppingCartAction,
} from '../reducers/ShoppingCart/action'
import { shoppingCartReducer } from '../reducers/ShoppingCart/reducer'

import { ItemShoppingCart } from '../Model/ItemShoppingCart'
import { Coffee } from '../Model/Coffee'

interface ShoppingCartContextType {
  shoppingCart: ItemShoppingCart[]
  createNewItemShoppingCart: (coffee: Coffee, amount: number) => void
  updateAmoutItemShoppingCart: (amount: number, id: string) => void
  removeItemShoppingCart: (id: string) => void
}

interface ShoppingCartProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType,
)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCartState, dispatch] = useReducer(shoppingCartReducer, {
    coffeeCart: [],
  })

  const { coffeeCart } = shoppingCartState

  function createNewItemShoppingCart(coffee: Coffee, amount: number) {
    const id = String(new Date().getTime())

    const newProduct: ItemShoppingCart = {
      amount,
      coffee,
      id,
    }
    dispatch(createNewItemShoppingCartAction(newProduct))
  }

  function updateAmoutItemShoppingCart(amount: number, id: string) {
    dispatch(updateAmoutInItemShoppingCartAction(amount, id))
  }

  function removeItemShoppingCart(id: string) {
    dispatch(removeItemShoppingCartAtion(id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart: coffeeCart,
        createNewItemShoppingCart,
        removeItemShoppingCart,
        updateAmoutItemShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
