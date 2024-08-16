import React from 'react'
import { ThemeContext } from '../../theme/ThemeChanger'

export const Footer = () => {

  const { theme } = React.useContext(ThemeContext)

  return (
    <footer>
      <p className={theme ? 'footer-p' : 'light-footer-p'}>Developed by <span>Drik.</span></p>
    </footer>
  )
}
