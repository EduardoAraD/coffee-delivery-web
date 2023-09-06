import { css, styled } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.YELLOW};
    font-family: ${({ theme }) => theme.fontFamily.BALOO2};
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.Title.L};

    margin-bottom: 4px;
  }
  > p {
    color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
    font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
    font-size: ${({ theme }) => theme.fontSize.Text.L};
  }

  > div {
    display: flex;
    margin-top: 1.75rem;
    align-items: center;
    gap: 6rem;

    > div {
      display: flex;
      padding: 1px;
      flex: 1;
      border-radius: 6px 36px 6px 36px;
      ${({ theme }) => css`
        background-image: linear-gradient(
          135deg,
          ${theme.colors.YELLOW} 0%,
          ${theme.colors.PURPLE} 100%
        );
      `}
      > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: ${({ theme }) => theme.colors.BACKGROUND};
        border-radius: 6px 36px 6px 36px;
        padding: 2.5rem;
        gap: 2rem;
      }
    }
  }
`
