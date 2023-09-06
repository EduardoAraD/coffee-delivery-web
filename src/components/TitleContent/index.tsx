import { ReactNode } from 'react'

import { Title, TitleContentContainer } from './styles'

interface Props {
  title: string
  children: ReactNode
}

export function TitleContent({ children, title }: Props) {
  return (
    <TitleContentContainer>
      <Title>{title}</Title>
      {children}
    </TitleContentContainer>
  )
}
