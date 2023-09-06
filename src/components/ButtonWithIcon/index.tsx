import { ButtonHTMLAttributes } from 'react'

import { TypeIconProps } from '../IconLabel'

import { ButtonContainer } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: TypeIconProps
  title: string
  selected?: boolean
}

export function ButtonWithIcon({
  icon: Icon,
  title,
  selected = false,
  ...rest
}: Props) {
  return (
    <ButtonContainer type="button" selected={selected} {...rest}>
      <Icon size={16} />
      <p>{title.toUpperCase()}</p>
    </ButtonContainer>
  )
}
