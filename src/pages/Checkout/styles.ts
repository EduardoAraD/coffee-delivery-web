import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  div.contentForm {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;

    div.options {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      align-items: center;
      margin-top: 2rem;
    }

    div.itensPrice {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      div.infoPrice {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  }

  div.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;

    div {
      display: flex;
      gap: 0.5rem;
    }

    #curt {
      max-width: 200px;
    }
    #x-curt {
      max-width: 60px;
    }
  }
`

export const Line = styled.div`
  height: 0px;
  width: 100%;
`
