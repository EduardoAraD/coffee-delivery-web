import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { UpdateNumberItem } from '../UpdateNumberItem'

import { Coffee } from '../../Model/Coffee'

import { CardContainer, Price } from './styles'
import { moneyMask } from '../../utils/mask'
import { useState } from 'react'

interface Props {
  coffee: Coffee
}

export function CardCoffee({
  coffee: { image, description, name, price, type },
}: Props) {
  const {
    colors: { WHITE },
  } = useTheme()
  const [qtdCoffee, setQtdCoffee] = useState(0)

  function UpdateQtdCoffee(value: number) {
    if (qtdCoffee + value < 0) {
      return
    }
    setQtdCoffee((state) => state + value)
  }

  return (
    <CardContainer>
      <img src={image} alt="" />
      <div className="type">
        {type.map((item) => (
          <span key={item} className="type">
            {item}
          </span>
        ))}
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
      <div className="actions">
        <Price>
          <span>R$</span>
          <p>{moneyMask(price)}</p>
        </Price>
        <div className="buttons">
          <UpdateNumberItem
            onMinus={() => UpdateQtdCoffee(-1)}
            onPlus={() => UpdateQtdCoffee(+1)}
            value={qtdCoffee}
          />
          <button className="submit">
            <ShoppingCart weight="fill" size={22} color={WHITE} />
          </button>
        </div>
      </div>
    </CardContainer>
  )
}
