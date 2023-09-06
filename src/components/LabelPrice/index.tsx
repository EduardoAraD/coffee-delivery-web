import { moneyMask } from '../../utils/mask'

import { LabelPriceContainer } from './styles'

interface Props {
  label: string
  price: number
  bolder?: boolean
}

export function LabelPrice({ label, price, bolder = false }: Props) {
  return (
    <LabelPriceContainer border={bolder}>
      <p>{label}</p>
      <p>R$ {moneyMask(price)}</p>
    </LabelPriceContainer>
  )
}
