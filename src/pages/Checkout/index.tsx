import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Button } from '../../components/Button'
import { ButtonWithIcon } from '../../components/ButtonWithIcon'
import { CardItemCoffee } from '../../components/CardItemCoffee'
import { IconTitleSubtitle } from '../../components/IconTitleSubtitle'
import { Input } from '../../components/Input'
import { LabelPrice } from '../../components/LabelPrice'
import { TitleContent } from '../../components/TitleContent'

import { CheckoutContainer, Line } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <div style={{ flex: 3 }}>
          <TitleContent title="Complete seu pedido">
            <div className="contentForm">
              <IconTitleSubtitle
                icon={MapPinLine}
                colorIcon="YELLOW_DARK"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                title="Endereço de Entrega"
              />
              <div className="form">
                <Input id="curt" placeholder="CEP" />
                <Input placeholder="Rua" />
                <div>
                  <Input id="curt" placeholder="Número" />
                  <Input placeholder="Complemento" isOptional />
                </div>
                <div>
                  <Input id="curt" placeholder="Bairro" />
                  <Input placeholder="Cidade" />
                  <Input id="x-curt" placeholder="UF" maxLength={2} />
                </div>
              </div>
            </div>
            <div className="contentForm">
              <IconTitleSubtitle
                icon={CurrencyDollar}
                colorIcon="PURPLE"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                title="Pagamento"
              />
              <div className="options">
                <ButtonWithIcon
                  icon={CreditCard}
                  title="Cartão de Crédito"
                  selected
                />
                <ButtonWithIcon icon={Bank} title="Cartão de Débito" />
                <ButtonWithIcon icon={Money} title="Dinheiro" />
              </div>
            </div>
          </TitleContent>
        </div>
        <div style={{ flex: 2 }}>
          <TitleContent title="Cafés selecionados">
            <div className="contentForm">
              <div className="itensPrice">
                <CardItemCoffee />
                <Line />
                <CardItemCoffee />
                <Line />
                <CardItemCoffee />
                <Line />
                <div className="infoPrice">
                  <LabelPrice label="Total de Itens" price={19.8} />
                  <LabelPrice label="Entrega" price={1.5} />
                  <LabelPrice label="Total" price={21.3} bolder />
                </div>
                <Button title="CONFIRMAR PEDIDO" />
              </div>
            </div>
          </TitleContent>
        </div>
      </form>
    </CheckoutContainer>
  )
}
