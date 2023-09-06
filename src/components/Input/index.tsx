import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
}

export function Input({
  isOptional = false,
  style,
  id,
  className,
  ...rest
}: Props) {
  return (
    <InputContainer style={style} id={id} className={className}>
      <input {...rest} />
      {isOptional && <span>Opcional</span>}
    </InputContainer>
  )
}
