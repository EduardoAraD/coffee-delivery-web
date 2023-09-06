import { produce } from 'immer'

import { ItemShoppingCart } from '../../Model/ItemShoppingCart'

import { ShoppingCartActionTypes } from './action'

interface ShoppingCartData {
  coffeeCart: ItemShoppingCart[]
}

export function shoppingCartReducer(state: ShoppingCartData, action: any) {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_NEW_ITEM: {
      return produce(state, (draft) => {
        draft.coffeeCart.push(action.payload.newCoffee)
      })
    }
    case ShoppingCartActionTypes.UPDATE_AMOUNT_ITEM: {
      const { amount, id } = action.payload

      const itemShoppingCartIndex = state.coffeeCart.findIndex(
        (item) => item.id === id,
      )
      if (itemShoppingCartIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.coffeeCart[itemShoppingCartIndex].amount = amount
      })
    }
    case ShoppingCartActionTypes.REMOVE_ITEM: {
      const { id } = action.payload

      return produce(state, (draft) => {
        draft.coffeeCart = draft.coffeeCart.filter((item) => item.id !== id)
      })
    }
    default:
      return state
  }
}
