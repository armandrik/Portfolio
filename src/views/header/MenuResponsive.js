import React from 'react'
import '@material/web/button/text-button';
import { ThemeContext } from '../../theme/ThemeChanger';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IconButton from '@mui/material/IconButton';

export const MenuResponsive = ({ setDisplayMenu }) => {

    const { theme } = React.useContext(ThemeContext)

    const headerItem = [
        { id: 1, item: 'Home', href: '#home', icon: <HomeIcon sx={{ color: '#7c7c7c' }} /> },
        { id: 2, item: 'About', href: '#about', icon: <PersonIcon sx={{ color: '#7c7c7c' }} /> },
        { id: 3, item: 'Skills', href: '#skill', icon: <AutoAwesomeIcon sx={{ color: '#7c7c7c' }} /> },
        { id: 4, item: 'Latest project', href: '#project', icon: <CodeIcon sx={{ color: '#7c7c7c' }} /> },
        { id: 5, item: 'Contact', href: '#contact', icon: <ConnectWithoutContactIcon sx={{ color: '#7c7c7c' }} /> }
    ]


    const closeMenu = () => {
        setDisplayMenu(false)
    }

    return (
        <div className='meta-container-responsive-menu'>
            <div className={theme ? 'responsive-menu' : 'light-responsive-menu'}>
                <IconButton onClick={closeMenu}>
                    <CloseIcon sx={theme ? { color: '#ffffff' } : { color: '#000000d7' }} />
                </IconButton>
                <div className='menu'>
                    {headerItem.map(item =>
                        <div key={item.id}>
                            {item.icon}
                            <md-text-button onClick={closeMenu} href={item.href}>{item.item}</md-text-button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
