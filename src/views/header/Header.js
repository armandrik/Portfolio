import React from 'react'
import '@material/web/button/text-button';
import { ThemeContext } from '../../theme/ThemeChanger';
import { ActionButton } from './ActionButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuResponsive } from './MenuResponsive';
import { Fab } from './Fab';
import { headerItem } from '../../data';
import { IconButton } from '@mui/material';


export const Header = () => {

  const [displayMenu, setDisplayMenu] = React.useState(false)

  const openMenu = () => {
    setDisplayMenu(true)
  }

  const closeMenu = () => {
    setDisplayMenu(false)
  }

  const { theme } = React.useContext(ThemeContext)

  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== "undefined") {

      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [scrollPosition])

  return (
    <header className={theme ? 'header' : 'light-header'}>
      <h2 className={theme ? 'title' : 'light-title'}>
        <IconButton onClick={openMenu}>
          <MenuIcon sx={{ cursor: 'pointer', display: 'none', color: theme ? '#ffffffe5' : '#000000d7' }} className='menu-icon' />
        </IconButton>
        Drik.
      </h2>
      <div className='menu'>
        {headerItem.map(item => <md-text-button key={item.id} href={item.href} onClick={closeMenu}>{item.item}</md-text-button>)}
      </div>
      {displayMenu ?
        <MenuResponsive setDisplayMenu={setDisplayMenu} />
        :
        null
      }
      <ActionButton />
      {scrollPosition > 200 ?
        <Fab />
        : null}
    </header>
  )
}