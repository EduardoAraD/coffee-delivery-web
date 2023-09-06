import { ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <p>{title}</p>
    </ButtonContainer>
  )
}
