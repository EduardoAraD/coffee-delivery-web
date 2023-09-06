import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './routes'

import { ShoppingCartProvider } from './contexts/ShoppingCart'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
