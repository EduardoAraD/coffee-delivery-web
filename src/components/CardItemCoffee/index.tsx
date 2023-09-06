import { Trash } from 'phosphor-react'

import { ButtonWithIcon } from '../ButtonWithIcon'
import { UpdateNumberItem } from '../UpdateNumberItem'

import { ItemShoppingCart } from '../../Model/ItemShoppingCart'

import { moneyMask } from '../../utils/mask'

import { CardItemContainer } from './styles'
import { useShoppingCart } from '../../hooks/ShoppingCart'

interface Props {
  itemCoffee: ItemShoppingCart
}

export function CardItemCoffee({ itemCoffee: { amount, coffee, id } }: Props) {
  const { updateAmoutItemShoppingCart, removeItemShoppingCart } =
    useShoppingCart()

  function handleUpdateAmount(value: number) {
    const newAmount = amount + value

    if (newAmount === 0) {
      removeItemShoppingCart(id)
    } else {
      updateAmoutItemShoppingCart(newAmount, id)
    }
  }

  function handleRemoveItem() {
    removeItemShoppingCart(id)
  }

  return (
    <CardItemContainer>
      <img src={coffee.image} alt="" />
      <div className="card-info">
        <div style={{ justifyContent: 'space-between' }}>
          <span>{coffee.name}</span>
          <span>
            <b>R$ {moneyMask(amount * coffee.price)}</b>
          </span>
        </div>
        <div>
          <UpdateNumberItem
            onMinus={() => handleUpdateAmount(-1)}
            onPlus={() => handleUpdateAmount(+1)}
            value={amount}
          />
          <ButtonWithIcon
            style={{
              height: 32,
              padding: 0,
              paddingLeft: 8,
              paddingRight: 8,
              maxWidth: 'fit-content',
            }}
            icon={Trash}
            title="Remover"
            onClick={handleRemoveItem}
          />
        </div>
      </div>
    </CardItemContainer>
  )
}
