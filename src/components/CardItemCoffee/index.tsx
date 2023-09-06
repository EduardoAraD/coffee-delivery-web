import { Trash } from 'phosphor-react'

import { ButtonWithIcon } from '../ButtonWithIcon'
import { UpdateNumberItem } from '../UpdateNumberItem'

import { moneyMask } from '../../utils/mask'

import logoImg from '../../assets/coffeeArabe.png'
import { CardItemContainer } from './styles'

export function CardItemCoffee() {
  return (
    <CardItemContainer>
      <img src={logoImg} alt="" />
      <div className="card-info">
        <div style={{ justifyContent: 'space-between' }}>
          <span>Expresso Tradicional</span>
          <span>
            <b>R$ {moneyMask(9.9)}</b>
          </span>
        </div>
        <div>
          <UpdateNumberItem onMinus={() => {}} onPlus={() => {}} value={1} />
          <ButtonWithIcon
            style={{
              height: 32,
              padding: 0,
              paddingLeft: 8,
              paddingRight: 8,
              maxWidth: 'fit-content',
            }}
            icon={Trash}
            title="Remover"
          />
        </div>
      </div>
    </CardItemContainer>
  )
}
