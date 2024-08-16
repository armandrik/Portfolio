import React from 'react'
import { ThemeContext } from '../../theme/ThemeChanger';
import Fade from 'react-reveal/Fade';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { skills } from '../../data';

export const SkillDetails = () => {

    const { theme } = React.useContext(ThemeContext)

    return (
        <Fade bottom duration={2000} delay={200} distance="30%">
            <div className='skill-progress'>
                <Accordion allowZeroExpanded>
                    {skills.map((item) => (
                        <AccordionItem key={item.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton className={theme ? 'accordion__button' : 'light_accordion__button'}>
                                    {item.skillName}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={theme ? 'accordion__panel' : 'light_accordion__panel'}>
                                {item.explain}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Fade>
    )
}
