import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  min-height: 2.875rem;
  max-height: 2.875rem;
  width: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.YELLOW};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.YELLOW_DARK};
  }

  p {
    color: ${({ theme }) => theme.colors.WHITE};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.Button.G};
  }
`
