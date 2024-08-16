import React from 'react'
import { ThemeContext } from './../../theme/ThemeChanger';
import CodeIcon from '@mui/icons-material/Code';
import { MyProjects } from './MyProjects';
import Fade from 'react-reveal/Fade';
import underLine from '../../assests/curved-underline.41c0ac36.svg'

export const Project = () => {

    const { theme } = React.useContext(ThemeContext)
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
        document.getElementsByClassName('under-line')[2].classList.add("slide-in");
      } else {
        document.getElementsByClassName('under-line')[2].classList.remove("slide-in");
      }
    }, [isIntersecting]);

    return (
        <div className='project-container' id='project'>
            <div className='project-header'>
                <Fade duration={2000} delay={200}>
                    <h1 className={theme ? 'project-h1' : 'light-project-h1'}><CodeIcon sx={{ fontSize: '34px' }} /> Projects</h1>
                </Fade>
                <img ref={ref} src={underLine} alt='underline' className='under-line' />
            </div>
            <MyProjects />
        </div>
    )
}
