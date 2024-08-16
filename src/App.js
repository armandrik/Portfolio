import React from 'react'
import './sass/App.css';
import { Header } from './views/header/Header';
import { ThemeContext } from './theme/ThemeChanger';
import { Home } from './views/home/Home';
import { About } from './views/about/About';
import { Skills } from './views/skills/Skills';
import { Footer } from './views/footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Contact } from './views/contact/Contact';
import { Project } from './views/projects/Project';

function App() {

  const { theme } = React.useContext(ThemeContext)

  return (
    <div className={theme ? 'App' : 'light-app'}>
      <Header/>
      <Home />
      <About/>
      <Skills />
      <Project/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
