import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import { ContainerHeader, ItensShop } from './styles'

export function Header() {
  const {
    colors: { PURPLE_DARK, YELLOW_DARK },
  } = useTheme()

  return (
    <ContainerHeader>
      <img src={logo} alt="" />
      <div>
        <div>
          <MapPin weight="fill" color={PURPLE_DARK} size={22} />
          <p>Caucaia, CE</p>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" color={YELLOW_DARK} size={22} />
        </NavLink>
        <ItensShop>3</ItensShop>
      </div>
    </ContainerHeader>
  )
}
