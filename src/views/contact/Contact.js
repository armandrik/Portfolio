import React from 'react'
import { Button } from '@mui/material';
import { ThemeContext } from '../../theme/ThemeChanger';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Fade from 'react-reveal/Fade';
import underLine from '../../assests/curved-underline.41c0ac36.svg'

export const Contact = () => {

  const { theme } = React.useContext(ThemeContext)
  const [buttonState, setButtonState] = React.useState(0)
  const form = React.useRef();
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();
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
          document.getElementsByClassName('under-line')[3].classList.add("slide-in");
      } else {
          document.getElementsByClassName('under-line')[3].classList.remove("slide-in");
      }
  }, [isIntersecting]);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState(1)

    emailjs.sendForm('service_oe452bq', 'template_lpyww28', form.current, 'lg-zHxbXTy6mZffAs')
      .then((result) => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
        setButtonState(2)
        setTimeout(() => {
          setButtonState(0)
        }, 10000);
      }, (error) => {
        setButtonState(3)
        setTimeout(() => {
          setButtonState(0)
        }, 10000);
      });
  };

  return (
    <Fade bottom duration={2000} distance="10%" delay={100}>
      <>
        <h1 className={theme ? 'contact-h1' : 'light-contact-h1'}><ConnectWithoutContactIcon sx={{ fontSize: '34px' }} /> Contact</h1>
        <img ref={ref} src={underLine} alt='underline' className='under-line' />
        <form className='contact-container' id='contact' ref={form} onSubmit={sendEmail}>
          <input placeholder='Name' type='text' className={theme ? 'name-input' : 'light-name-input'} name='user_name' autoComplete="off" required ref={nameRef} />
          <input placeholder='Email' type='email' className={theme ? 'name-input' : 'light-name-input'} name='user_email' autoComplete="off" required ref={emailRef} />
          <textarea placeholder='Message' className={theme ? 'textarea' : 'light-textarea'} name='message' required ref={messageRef} />
          {buttonState === 0 ?
            <Button sx={{ color: '#6e82f3' }} className={theme ? 'contact-btn' : 'light-contact-btn'} type='submit'>Submit <ForwardToInboxIcon sx={{ marginLeft: '8px', marginBottom: '2px' }} /></Button>
            :
            buttonState === 1 ?
              <Button sx={{ color: '#6e82f3', height: '65px' }} className={theme ? 'contact-btn' : 'light-contact-btn'}>Progress <CircularProgress sx={{ marginLeft: '5px', padding: '7px', color: '#5566c9' }} /></Button>
              :
              buttonState === 2 ?
                <Button sx={{ color: '#6e82f3' }} className={theme ? 'contact-btn' : 'light-contact-btn'}>Sent <DoneAllIcon sx={{ marginLeft: '8px', marginBottom: '2px', color: '#4ce453' }} /></Button>
                :
                <Button sx={{ color: '#6e82f3' }} className={theme ? 'contact-btn' : 'light-contact-btn'}>Something went wrong <PriorityHighIcon sx={{ marginLeft: '8px', marginBottom: '2px', color: 'crimson' }} /></Button>
          }
        </form>
      </>
    </Fade>
  )
}
