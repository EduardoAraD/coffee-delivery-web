import { styled } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 16rem;
  padding: 1.5rem;

  flex-direction: column;
  align-items: center;

  img {
    height: 120px;
    width: 120px;
    margin-bottom: 0.75rem;
  }

  div.type {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  span.type {
    padding: 4px 8px;
    margin-bottom: 1rem;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.YELLOW_LIGTH};
    color: ${({ theme }) => theme.colors.YELLOW_DARK};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.TAG};
  }

  h3 {
    color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
    font-family: ${({ theme }) => theme.fontFamily.BALOO2};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.Title.S};
  }
  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.BASE_LABEL};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.S};
  }

  div.actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 2rem;

    div.buttons {
      display: flex;

      button.submit {
        border: none;
        height: 2.375rem;
        width: 2.375rem;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.colors.PURPLE_DARK};

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        transition: 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.PURPLE};
        }
      }
    }
  }
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;

  span {
    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.S};
    margin-bottom: 2px;
    margin-right: 2px;
  }
  p {
    color: ${({ theme }) => theme.colors.BASE_TEXT};
    font-family: ${({ theme }) => theme.fontFamily.BALOO2};
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.Title.M};
    line-height: ${({ theme }) => theme.fontSize.Title.M};
  }
`
