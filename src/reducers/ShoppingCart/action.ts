import { ItemShoppingCart } from '../../Model/ItemShoppingCart'

export enum ShoppingCartActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  UPDATE_AMOUNT_ITEM = 'UPDATE_AMOUNT_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function createNewItemShoppingCartAction(coffeItem: ItemShoppingCart) {
  return {
    type: ShoppingCartActionTypes.ADD_NEW_ITEM,
    payload: {
      newCoffee: coffeItem,
    },
  }
}

export function updateAmoutInItemShoppingCartAction(
  amount: number,
  id: string,
) {
  return {
    type: ShoppingCartActionTypes.UPDATE_AMOUNT_ITEM,
    payload: {
      amount,
      id,
    },
  }
}

export function removeItemShoppingCartAtion(id: string) {
  return {
    type: ShoppingCartActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}
