import React from 'react'
import '@material/web/iconbutton/filled-tonal-icon-button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Fab = () => {
    return (
        <div className='go-up-btn'>
            <md-filled-tonal-icon-button href='#top'>
                <KeyboardArrowUpIcon sx={{color: '#ffffff'}}/>
            </md-filled-tonal-icon-button>
        </div>
    )
}
