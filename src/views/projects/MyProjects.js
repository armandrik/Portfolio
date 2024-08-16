import React from 'react'
import { ThemeContext } from './../../theme/ThemeChanger';
import { Button, IconButton, Modal, Tooltip } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { project } from '../../data';
import reactLogo from '../../assests/icons8-react-native-48.png'
import Fade from 'react-reveal/Fade';

export const MyProjects = () => {

    const { theme } = React.useContext(ThemeContext)

    const [open, setOpen] = React.useState(false);
    const [selectedModal, setSelectedModal] = React.useState([])

    const handleOpen = (id) => {
        setSelectedModal(project[id - 1])
        setOpen(true)
    }

    React.useEffect(() => {

    }, [selectedModal])

    const handleClose = () => setOpen(false);

    return (
        <div className='project'>
            {project.map(item => (
                <Fade key={item.id} bottom duration={2000} distance="10%" delay={100}>
                    <div className={theme ? 'project-project' : 'light-project-project'}>
                        <img src={item.src} alt={item.alt} />
                        <h2 className={theme ? 'project-title' : 'light-project-title'}>
                            {item.title}
                            <Tooltip title="read more">
                                <IconButton onClick={() => handleOpen(item.id)}>
                                    <ReadMoreIcon sx={{ color: '#6e82f3', fontSize: '28px' }} />
                                </IconButton>
                            </Tooltip>
                        </h2>
                        <div className='project-btn'>
                            <Tooltip title="Visit live demo">
                                <Button variant='contained' sx={{ backgroundColor: '#5c72ec' }} className='demo' endIcon={<LaunchIcon />} href={item.demo} target='_blank'>Demo</Button>
                            </Tooltip>
                            <Tooltip title="Source code">
                                <Button variant='outlined' sx={{ borderColor: '#5c72ec', }} className={theme ? 'project-p' : 'light-project-p'} endIcon={<GitHubIcon />} href={item.github} target='_blank'>
                                    GitHub
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </Fade>
            ))}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={theme ? 'modal' : 'light-modal'}>
                    <h2 className='modal-title'>
                        <img src={reactLogo} alt='react logo' />
                        {selectedModal.ModalTitle}
                    </h2>
                    <ul className='modal-list'>
                    {selectedModal.describe && selectedModal.describe.map(item => <li key={crypto.randomUUID()}>{item}</li>)}
                    </ul>
                    <div className='modal-tech-stack'>
                        <span>Tech:</span>
                        {selectedModal.tech && selectedModal.tech.map(item => <img key={crypto.randomUUID()} src={item} alt='tech stack'/>)}
                    </div>
                </div>
            </Modal>
        </div>
    )
}
