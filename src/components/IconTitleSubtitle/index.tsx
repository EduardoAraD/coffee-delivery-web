import { TypeIconProps } from '../IconLabel'

import { IconTitleSubtitleContainer, IconColorType } from './styles'

interface Props {
  icon: TypeIconProps
  title: string
  subtitle: string
  colorIcon: IconColorType
}

export function IconTitleSubtitle({
  icon: Icon,
  subtitle,
  title,
  colorIcon,
}: Props) {
  return (
    <IconTitleSubtitleContainer colorIcon={colorIcon}>
      <Icon size={22} />
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </IconTitleSubtitleContainer>
  )
}
