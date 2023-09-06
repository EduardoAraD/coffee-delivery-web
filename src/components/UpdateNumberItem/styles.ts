import { styled } from 'styled-components'

export const UpdateContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 8px;

  button {
    border: none;
    height: 0.875rem;
    width: 0.875rem;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;

    svg {
      color: ${({ theme }) => theme.colors.PURPLE};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.colors.PURPLE_DARK};
      }
    }
  }

  p {
    width: 1.25rem;
    text-align: center;

    color: ${({ theme }) => theme.colors.BASE_TITLE};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.M};
  }
`
