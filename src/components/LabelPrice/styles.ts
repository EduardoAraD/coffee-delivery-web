import { styled } from 'styled-components'

interface LabelPriceStyleProps {
  isbold: 'true' | 'false'
}

export const LabelPriceContainer = styled.div<LabelPriceStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme, isbold }) =>
      isbold ? theme.colors.BASE_SUBTITLE : theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-weight: ${({ isbold }) => (isbold ? '700' : '400')};
    font-size: ${({ theme, isbold }) =>
      isbold ? theme.fontSize.Text.L : theme.fontSize.Text.S};
  }
`
