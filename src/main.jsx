import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

import { Routes } from "./Routes"
import { Contatos } from "./pages/Contatos"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Contatos/>
    </ThemeProvider>
  </React.StrictMode>,
)
