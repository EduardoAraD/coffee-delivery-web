import { Minus, Plus } from 'phosphor-react'

import { UpdateContainer } from './styles'

interface Props {
  value: number
  onPlus: () => void
  onMinus: () => void
}

export function UpdateNumberItem({ onMinus, onPlus, value }: Props) {
  return (
    <UpdateContainer>
      <button type="button" onClick={onMinus} disabled={value <= 0}>
        <Minus size={14} />
      </button>
      <p>{value}</p>
      <button type="button" onClick={onPlus}>
        <Plus size={14} />
      </button>
    </UpdateContainer>
  )
}
