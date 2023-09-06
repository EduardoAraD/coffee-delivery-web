import { styled } from 'styled-components'

export const CardItemContainer = styled.div`
  display: flex;
  padding: 8px 4px;
  gap: 1.25rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  div.card-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    div {
      display: flex;
      gap: 0.5rem;

      span {
        color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
        font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
        font-size: ${({ theme }) => theme.fontSize.Text.M};
      }
    }
  }
`
