import { styled } from 'styled-components'

export type DivIconColorsProps =
  | 'YELLOW_DARK'
  | 'YELLOW'
  | 'PURPLE'
  | 'BASE_TEXT'

interface IconLabelDivColorProps {
  colorType: DivIconColorsProps
}

export const IconLabelContainer = styled.div<IconLabelDivColorProps>`
  display: flex;
  gap: 0.625rem;

  align-items: center;

  div {
    height: 2rem;
    width: 2rem;
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme, colorType }) => theme.colors[colorType]};
  }

  p {
    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.M};
  }
`
