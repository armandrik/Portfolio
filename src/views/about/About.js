import React from 'react'
import { ThemeContext } from './../../theme/ThemeChanger';
import CallIcon from '@mui/icons-material/Call';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Fade from 'react-reveal/Fade';
import underLine from '../../assests/curved-underline.41c0ac36.svg'


export const About = () => {

  const { theme } = React.useContext(ThemeContext)
  const [showAlert, setShowAlert] = React.useState(false)
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  React.useEffect(() => {
    if (isIntersecting) {
      document.getElementsByClassName('under-line')[0].classList.add("slide-in");
    } else {
      document.getElementsByClassName('under-line')[0].classList.remove("slide-in");
    }
  }, [isIntersecting]);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://drik.netlify.app/')
    setShowAlert(!showAlert)
    setInterval(() => {
      setShowAlert(false)
    }, 5000);
  }
  return (
    <Fade duration={2000} delay={200}>
      <div className='about-container' id='about'>
        <h1 className={theme ? 'about-h1' : 'light-about-h1'}><InfoIcon sx={{ fontSize: '34px' }} /> About Me</h1>
        <img ref={ref} src={underLine} alt='underline' className='under-line' />
        <div className='about'>
          <h3 className={theme ? 'describe' : 'light-describe'}>
            Hey there, I'm Arman, a web developer with a passion for building sleek and modern
            web applications using React. I love working on the front-end of websites and have a sharp eye for UI/UX design.
            If you're looking for someone to help bring your web projects to life, you've come to the right place!
          </h3>
          <div className={theme ? 'about-contact' : 'light-about-contact'}>
            <h4><CallIcon /> +98 938 485 1297</h4>
            <h4>
              <LocalPostOfficeIcon />
              <a href='mailto:arman.driik@gmail.com'>Arman.driik@gmail.com</a>
            </h4>
            <h4>
              <LinkIcon />
              <a href='https://armandrik.netlify.app/' target='_blank' rel="noreferrer">https://drik.netlify.app</a>
              {showAlert ? <DoneAllIcon sx={{ color: '#41d156' }} /> : <ContentCopyIcon sx={{ cursor: 'pointer' }} onClick={handleCopy} />}
            </h4>
          </div>
        </div>
      </div>
    </Fade>
  )
}
