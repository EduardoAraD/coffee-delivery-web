import { styled } from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 2rem 0;

  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.625rem;
    align-items: center;

    div {
      display: flex;
      gap: 0.25rem;

      p {
        color: ${({ theme }) => theme.colors.PURPLE_DARK};
        font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
        font-size: ${({ theme }) => theme.fontSize.Text.S};
      }
    }

    a {
      display: flex;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors.YELLOW_LIGTH};
    }
  }
`

export const ItensShop = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 9999px;

  justify-content: center;
  align-items: center;

  margin-left: -22px;
  margin-top: -30px;

  background-color: ${({ theme }) => theme.colors.YELLOW_DARK};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
  font-size: ${({ theme }) => theme.fontSize.Text.XS};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.WHITE};
`
