import { ReactNode } from 'react'

import { TypeIconProps } from '../../../../components/IconLabel'

import { ItemIconContainer, IconColorStyleProps } from './styles'

interface Props {
  icon: TypeIconProps
  children: ReactNode
  colorIcon: IconColorStyleProps
}

export function ItemIcon({ icon: Icon, children, colorIcon }: Props) {
  return (
    <ItemIconContainer iconcolor={colorIcon}>
      <div className="icon">
        <Icon size={16} weight="fill" />
      </div>
      <div>{children}</div>
    </ItemIconContainer>
  )
}
