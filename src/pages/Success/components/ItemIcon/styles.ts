import { styled } from 'styled-components'

export type IconColorStyleProps = 'YELLOW' | 'YELLOW_DARK' | 'PURPLE'

interface IconColorProps {
  colorIcon: IconColorStyleProps
}

export const ItemIconContainer = styled.div<IconColorProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  div.icon {
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, colorIcon }) => theme.colors[colorIcon]};

    svg {
      color: ${({ theme }) => theme.colors.WHITE};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.M};
  }
`
