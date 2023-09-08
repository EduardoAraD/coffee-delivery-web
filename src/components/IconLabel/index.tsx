import { IconProps } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { DivIconColorsProps, IconLabelContainer } from './styles'

export type TypeIconProps = React.FC<IconProps>

interface Props {
  icon: TypeIconProps
  text: string
  colorType: DivIconColorsProps
}

export function IconLabel({ icon: Icon, text, colorType }: Props) {
  const {
    colors: { WHITE },
  } = useTheme()

  return (
    <IconLabelContainer colortype={colorType}>
      <div>
        <Icon weight="fill" size={16} color={WHITE} />
      </div>
      <p>{text}</p>
    </IconLabelContainer>
  )
}
