import { styled } from 'styled-components'

interface Props {
  selected: boolean
}

export const ButtonContainer = styled.button<Props>`
  flex: 1;
  display: flex;
  border: none;

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid
    ${({ theme, selected }) => (selected ? theme.colors.PURPLE : 'transparent')};
  border-radius: 6px;
  cursor: pointer;

  transition: 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.PURPLE};
  }
  p {
    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Button.M};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.BASE_HOVER};
  }
`
