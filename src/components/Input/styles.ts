import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  input {
    display: flex;
    width: 100%;
    padding: 0.75rem;

    flex: 1;
    border: none;

    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.S};

    &::placeholder {
      color: ${({ theme }) => theme.colors.BASE_LABEL};
    }
  }
  span {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.BASE_LABEL};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.XS};
    font-style: italic;
  }
`
