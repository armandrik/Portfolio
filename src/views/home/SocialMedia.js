import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

export const SocialMedia = () => {
    return (
        <div className='social-wrapper'>
            <Button variant='text' endIcon={<LinkedInIcon />} sx={{ color: "#6e82f3" }} href='https://linkedin.com/in/armandrik' target='_blank'>
                Linkedin
            </Button>
            <Button variant='text' endIcon={<GitHubIcon />} sx={{ color: "#6e82f3" }} href='https://github.com/armandrik' target='_blank'>
                GitHub
            </Button>
            <Button variant='text' endIcon={<TelegramIcon />} sx={{ color: "#6e82f3" }} href='https://t.me/armandrik' target='_blank'>
                Telegram
            </Button>
        </div>
    )
}
