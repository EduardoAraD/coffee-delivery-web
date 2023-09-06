import { styled } from 'styled-components'

export type IconColorType = 'YELLOW_DARK' | 'PURPLE'

interface Props {
  colorIcon: IconColorType
}

export const IconTitleSubtitleContainer = styled.div<Props>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme, colorIcon }) => theme.colors[colorIcon]};
  }
  p {
    color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.M};
  }
  span {
    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.S};
  }
`
