import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'

import { CardCoffee } from '../../components/CardCoffee'
import { IconLabel } from '../../components/IconLabel'

import { Coffees } from '../../services/coffees'

import { ContainerHome } from './styles'
import CoffeeImage from '../../assets/coffee.png'

export function Home() {
  return (
    <ContainerHome>
      <div className="info">
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="listIcon">
            <IconLabel
              icon={ShoppingCart}
              text="Compra simples e segura"
              colorType="YELLOW_DARK"
            />
            <IconLabel
              icon={Package}
              text="Embalagem mantém o café intacto"
              colorType="BASE_TEXT"
            />
            <IconLabel
              icon={Clock}
              text="Entrega rápida e rastreada"
              colorType="YELLOW"
            />
            <IconLabel
              icon={Coffee}
              text="O café chega fresquinho até você"
              colorType="PURPLE"
            />
          </div>
        </div>
        <img src={CoffeeImage} alt="" />
      </div>
      <h1 className="title">Nossos cafés</h1>
      <div className="list">
        {Coffees.map((coffee) => (
          <CardCoffee key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </ContainerHome>
  )
}
