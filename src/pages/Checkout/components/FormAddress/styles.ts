import { styled } from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  div.input-div {
    display: flex;
    flex: 1;
    align-items: center;

    span {
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.BASE_LABEL};
      font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
      font-size: ${({ theme }) => theme.fontSize.Text.XS};
      font-style: italic;
    }
  }
`

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem;

  flex: 1;
  border: none;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.BASE_TEXT};
  font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
  font-size: ${({ theme }) => theme.fontSize.Text.S};

  &::placeholder {
    color: ${({ theme }) => theme.colors.BASE_LABEL};
  }
`
