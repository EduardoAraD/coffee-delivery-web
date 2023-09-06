import { styled } from 'styled-components'

export const TitleContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
  font-family: ${({ theme }) => theme.fontFamily.BALOO2};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.Text.XS};
`
