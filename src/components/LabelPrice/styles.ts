import { styled } from 'styled-components'

interface Props {
  border: boolean
}

export const LabelPriceContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme, border }) =>
      border ? theme.colors.BASE_SUBTITLE : theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-weight: ${({ border }) => (border ? '700' : '400')};
    font-size: ${({ theme, border }) =>
      border ? theme.fontSize.Text.L : theme.fontSize.Text.S};
  }
`
