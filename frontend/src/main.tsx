import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegisterAccount from './auth/Register'

import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterAccount />
  </StrictMode>,
)
