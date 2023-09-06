import { styled } from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;

  flex-direction: column;

  div.info {
    display: flex;
    padding: 5.875rem 0;
    gap: 3.5rem;

    justify-content: space-between;
    align-items: flex-start;

    h2 {
      color: ${({ theme }) => theme.colors.BASE_TITLE};
      font-family: ${({ theme }) => theme.fontFamily.BALOO2};
      font-weight: bolder;
      font-size: ${({ theme }) => theme.fontSize.Title.XL};
      line-height: 3.5rem;

      margin: 0px;
      padding: 0px;
      margin-bottom: 1rem;
    }
    p {
      color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
      font-family: ${({ theme }) => theme.fontFamily.ROBOTO};
      font-size: ${({ theme }) => theme.fontSize.Text.L};
    }

    div.listIcon {
      margin-top: 5.5rem;
      position: absolute;

      display: grid;
      grid-template-columns: 0.8fr 1fr;
      gap: 20px 40px;
    }
  }

  h1.title {
    padding: 32px 0px;
    margin: 0px;
    color: ${({ theme }) => theme.colors.BASE_SUBTITLE};
    font-family: ${({ theme }) => theme.fontFamily.BALOO2};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.Text.L};
  }

  div.list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
  }
`
