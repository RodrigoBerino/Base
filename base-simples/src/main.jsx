import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GameMenu from './gameMenu/GameMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameMenu/>
  </StrictMode>,
)
