import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { useShoppingCart } from '../../hooks/ShoppingCart'

import logo from '../../assets/Logo.svg'
import { ContainerHeader, ItensShop } from './styles'

export function Header() {
  const {
    colors: { PURPLE_DARK, YELLOW_DARK },
  } = useTheme()
  const { shoppingCart } = useShoppingCart()

  return (
    <ContainerHeader>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <div>
          <MapPin weight="fill" color={PURPLE_DARK} size={22} />
          <p>Caucaia, CE</p>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart weight="fill" color={YELLOW_DARK} size={22} />
        </NavLink>
        {shoppingCart.length > 0 && (
          <ItensShop>{shoppingCart.length}</ItensShop>
        )}
      </div>
    </ContainerHeader>
  )
}
