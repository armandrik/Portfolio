import React from 'react'
import '@material/web/iconbutton/standard-icon-button';
import { ThemeContext } from '../../theme/ThemeChanger';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ActionButton = () => {

    const { theme, ToggleTheme } = React.useContext(ThemeContext)

    return (
        <div className='action-button'>
            <md-standard-icon-button onClick={ToggleTheme} className="swith-theme">
                {theme ?
                    <LightModeIcon sx={{color:'#ffffffe5'}}/>
                    :
                    <NightsStayIcon sx={{ color: '#404755' }} />
                }
            </md-standard-icon-button>
        </div>
    )
}
