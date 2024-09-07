import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './auth/register'

import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
