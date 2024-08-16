import React from 'react'
import { ThemeContext } from '../../theme/ThemeChanger';
import Fade from 'react-reveal/Fade';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export const LearningSkill = () => {

    const { theme } = React.useContext(ThemeContext)

    return (
        <Fade duration={2000} delay={200}>
            <div className='LearningSkill'>
                {/* <h3 className={theme ? 'LearningSkill-h1' : 'light-LearningSkill-h1'}><HourglassBottomIcon sx={{ fontSize: '30px', color: '#6e82f3' }} /> In Progress</h3> */}
                <h3 className={theme ? 'LearningSkill-h1' : 'light-LearningSkill-h1'}><div class="custom-loader"></div> In Progress</h3>
                <div>
                    hello
                </div>
            </div>
        </Fade>
    )
}
