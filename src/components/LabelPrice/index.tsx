import { moneyMask } from '../../utils/mask'

import { LabelPriceContainer } from './styles'

interface Props {
  label: string
  price: number
  isBold?: boolean
}

export function LabelPrice({ label, price, isBold = false }: Props) {
  return (
    <LabelPriceContainer isbold={isBold ? 'true' : 'false'}>
      <p>{label}</p>
      <p>R$ {moneyMask(price)}</p>
    </LabelPriceContainer>
  )
}
