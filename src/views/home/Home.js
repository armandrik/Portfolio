import React from 'react'
import drik from '../../assests/IMG_20220704_134618_287.png'
import '@material/web/iconbutton/standard-icon-button';
import { ThemeContext } from '../../theme/ThemeChanger';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from '@mui/material/Button';
import { SocialMedia } from './SocialMedia';
import Fade from 'react-reveal/Fade';
import cv from '../../assests/cv-armandrik.pdf'
import arrowDwon from '../../assests/chevrons.58c357cc.svg'

export const Home = () => {

    const { theme } = React.useContext(ThemeContext)

    const openMailBox = () => {
        window.open('mailto:arman.driik@gmail.com')
    }

    return (
        <>
            <Fade bottom duration={3000} distance="10%" delay={100}>
                <main id='home'>
                    <img src={drik} className={theme ? 'img' : 'light-img'} alt='drik-profile' />
                    <div className='intro-container'>
                        <div className='intro-header'>
                            <h1 className={theme ? 'h1' : 'light-h1'}>HI, i'm Arman</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <div className={theme ? 'intro-describe' : 'light-intro-describe'}>
                            <p>I’m a front-end developer specializing in the ReactJS ecosystem, with a keen eye for detail and a passion for creating intuitive and efficient user interfaces.</p>
                        </div>
                        <div className='home-btn-container'>
                            <Button variant='contained' sx={{ backgroundColor: '#5c72ec' }} endIcon={<AutoAwesomeIcon />} onClick={openMailBox}>Contact me</Button>
                            <Button variant='outlined' sx={{ borderColor: '#5c72ec' }} className={theme ? 'cv-btn' : 'light-cv-btn'} endIcon={<FileDownloadIcon />} href={cv}>Download cv</Button>
                        </div>

                        <SocialMedia />
                    </div>
                </main>
            </Fade>
            <img src={arrowDwon} alt='arrow dwon' className='arrow-down' onClick={() => document.getElementById('about').scrollIntoView({ behavior: "smooth", })} />
        </>

    )
}
