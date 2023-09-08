import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { useDelivery } from '../../hooks/Delivery'

import { ItemIcon } from './components/ItemIcon'

import motoboySvg from '../../assets/motoboy.svg'
import { SuccessContainer } from './styles'

export function Success() {
  const {
    delivery: { address, estimatedTime, payment },
  } = useDelivery()

  const paymentText =
    payment === 'CreditCart'
      ? 'Cartão de Crédito'
      : payment === 'Bank'
      ? 'Cartão de Débito'
      : 'Dinheiro'

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <div>
          <div>
            <ItemIcon icon={MapPin} colorIcon="PURPLE">
              <p>
                Entrega em{' '}
                <b>
                  {address.street}, {address.number}
                </b>
              </p>
              <p>
                {address.district} - {address.city}, {address.uf}
              </p>
            </ItemIcon>
            <ItemIcon icon={Clock} colorIcon="YELLOW">
              <p>Previsão de Entrega</p>
              <p>
                <b>{estimatedTime}</b>
              </p>
            </ItemIcon>
            <ItemIcon icon={CurrencyDollar} colorIcon="YELLOW_DARK">
              <p>Pagamento na entrega</p>
              <p>
                <b>{paymentText}</b>
              </p>
            </ItemIcon>
          </div>
        </div>
        <img src={motoboySvg} alt="" />
      </div>
    </SuccessContainer>
  )
}
