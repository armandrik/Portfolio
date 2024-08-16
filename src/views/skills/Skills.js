import React from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject';
import { ThemeContext } from '../../theme/ThemeChanger';
import { SkillDetails } from './SkillDetails';
import { SkillSlider } from './SkillSlider';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Fade from 'react-reveal/Fade';
import SchoolIcon from '@mui/icons-material/School';
import underLine from '../../assests/curved-underline.41c0ac36.svg'
import { famaliar } from '../../data';
// import { LearningSkill } from './LearningSkill';

export const Skills = () => {

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
            document.getElementsByClassName('under-line')[1].classList.add("slide-in");
        } else {
            document.getElementsByClassName('under-line')[1].classList.remove("slide-in");
        }
    }, [isIntersecting]);



    return (
        <div className='skill-container' id='skill'>
            <Fade duration={2000} delay={200}>
                <div className='skill-header'>
                    <h1 className={theme ? 'skill-h1' : 'light-skill-h1'}><AutoAwesomeIcon sx={{ fontSize: '34px' }} /> Skills</h1>
                    <img ref={ref} src={underLine} alt='underline' className='under-line' />
                </div>
            </Fade>
            <SkillSlider />
            <Fade duration={2000} delay={200}>
                <div className='skill-issue'>
                    <DataObjectIcon sx={{ color: '#6e82f3', fontSize: '30px' }} />
                    <h3 className={theme ? 'skill-issue-h3' : 'light-skill-issue-h3'}>Frontend Developer</h3>
                </div>
            </Fade>
            <SkillDetails />
            <Fade duration={2000} delay={200}>
                <div className='familiar'>
                    <h3 className={theme ? 'familiar-h1' : 'light-familiar-h1'}><SchoolIcon sx={{ fontSize: '30px', color: '#6e82f3' }} /> Familiar with</h3>
                    <div>
                        {famaliar.map(item => <p key={item.id} className={theme ? 'familiar-items' : 'light-familiar-items'}>{item.name}</p>)}
                    </div>
                </div>
            </Fade>
            {/* <LearningSkill/> */}
        </div>
    )
}
