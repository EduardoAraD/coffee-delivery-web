import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { ItemIcon } from './components/ItemIcon'

import motoboySvg from '../../assets/motoboy.svg'
import { SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <div>
          <div>
            <ItemIcon icon={MapPin} colorIcon="PURPLE">
              <p>
                Entrega em <b>Rua Entrega em Rua João Daniel Martinelli, 102</b>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </ItemIcon>
            <ItemIcon icon={Clock} colorIcon="YELLOW">
              <p>Previsão de Entrega</p>
              <p>
                <b>20min - 30min</b>
              </p>
            </ItemIcon>
            <ItemIcon icon={CurrencyDollar} colorIcon="YELLOW_DARK">
              <p>Pagamento na entrega</p>
              <p>
                <b>Cartão de Crédito</b>
              </p>
            </ItemIcon>
          </div>
        </div>
        <img src={motoboySvg} alt="" />
      </div>
    </SuccessContainer>
  )
}
