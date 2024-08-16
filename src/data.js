import crypto from './assests/crypto-1.png'
// import shop from './assests/shop-1.png'
import todo from './assests/todo-1.png'
// import weather from './assests/weather-1.png'
import game from './assests/game-1.png'
import maxxcoffee from './assests/maxxcoffee.png'
import Ahil from './assests/Ahil-1.png'
import reactLogo from './assests/icons8-react-native-48.png'
import htmlLogo from './assests/icons8-html5-48.png'
import javascriptLogo from './assests/icons8-javascript-50.png'
import typecriptLogo from './assests/icons8-typescript-48.png'
import tailwind from './assests/icons8-tailwind-css-48.png'
import sassLogo from './assests/icons8-sass-48.png'
import materialLogo from './assests/icons8-material-ui-48.png'
import apiLogo from './assests/icons8-rest-api-50.png'
import cssLogo from './assests/icons8-css-48.png'
import figmaLogo from './assests/icons8-figma-48.png'
import reduxLogo from './assests/icons8-redux-50.png'

export const project = [
    {
        id: 1,
        src: maxxcoffee,
        title: 'Maxx Coffee',
        alt: 'maxx coffee image',
        github: 'https://github.com/armandrik/maxxCoffee',
        demo: 'https://maxxcoffee.netlify.app/',
        ModalTitle: "Maxx coffee - React.js Coffee Store",
        describe: ["The codebase is developed with TypeScript, ensuring type safety and reducing potential errors.", "Efficient API communication with Axios, alongside Context API for seamless global state management.", "Secure user authentication, including registration and login, managed through Firebase.", "Tailwind CSS is used to create a responsive and mobile-friendly interface, providing a consistent experience on all devices.", "A modern dark mode design with user preferences saved in localStorage, ensuring the theme persists across sessions."],
        tech: [reactLogo, javascriptLogo, typecriptLogo, tailwind, apiLogo, htmlLogo, figmaLogo]
    },
    {
        id: 2,
        src: game,
        title: 'Game Company',
        alt: 'game company image',
        github: 'https://github.com/armandrik/Game-Company',
        demo: 'https://game-company.netlify.app/',
        ModalTitle: "Game Company - React.js Game Store",
        describe: ["Focused on a compelling UI/UX design using React and SASS. I created smooth animations utilizing the react reveal library", "Ensured a responsive design for optimal user experience."],
        tech: [reactLogo, javascriptLogo, sassLogo, htmlLogo, figmaLogo]
    },
    {
        id: 3,
        src: Ahil,
        title: 'Ahil Landing Page',
        alt: 'Landing page image',
        github: 'https://github.com/armandrik/Ahil-landing-page',
        demo: 'https://ahil.app/',
        ModalTitle: "Ahil Landing Page - React.js and Material Design",
        describe: ["Responsive Landing page for Ahil Application.", "Implemented useContext for adding dark/light mode and i18next for building a bilingual site.", "Utilized React Router Dom", "Ensured a responsive design for optimal user experience."],
        tech: [reactLogo, javascriptLogo, htmlLogo, sassLogo]
    },
    {
        id: 4,
        src: crypto,
        title: 'Crypto Currency',
        alt: 'crepto image',
        github: 'https://github.com/armandrik/React-Crypto-App',
        demo: 'https://react-crypto-currency-drik.netlify.app/',
        ModalTitle: "Crypto Currency - React.js, HTML, and CSS",
        describe: ["real time crypto data that comes from api with axios.", "implemented React router dom, React Alice carousel and chart.js library for display data with different charts that helps user to see several type of data.", "Ensured a responsive design for optimal user experience."],
        tech: [reactLogo, javascriptLogo, htmlLogo, cssLogo, apiLogo]
    },
    {
        id: 5,
        src: todo,
        title: 'Todo App',
        alt: 'Todo image',
        github: 'https://github.com/armandrik/React-todo',
        demo: 'https://react-todo-app-drik.netlify.app/',
        ModalTitle: "Todo App - React.js, useReducer",
        describe: ["Task manager implemented with React, useReducer and Material UI.", "Handling actions with useReducer.", "Ensured a responsive design for optimal user experience."],
        tech: [reactLogo, javascriptLogo, materialLogo, htmlLogo, sassLogo]
    },
    // {
    //     id: 6,
    //     src: shop,
    //     title: 'Online Shop',
    //     alt: 'Online shop image',
    //     github: 'https://github.com/armandrik/react-onlineShop',
    //     demo: 'https://react-onlineshop-drik.netlify.app/',
    //     ModalTitle: "Online Shop - React.js, SASS, and Material UI",
    //     describe: ["Developed an online shop app with product data retrieved from an API using React, SASS, and Material UI.", "Fetch data with Axios.", "Utilized the useContext hook for state management and data passing between components.", "Utilized React Router Dom", "Ensured a responsive design for optimal user experience."],
    //     tech: [reactLogo, htmlLogo, sassLogo, javascriptLogo, materialLogo, apiLogo]
    // },
    // {
    //     id: 7,
    //     src: weather,
    //     title: 'Weather Application',
    //     alt: 'Weather Application image',
    //     github: 'https://github.com/armandrik/React-weather-app',
    //     demo: 'https://react-weather-app-drik.netlify.app/',
    //     ModalTitle: "Weather Application",
    //     describe: ["Call API with Axios", "Luxon and Toastr library.", "Ensured a responsive design for optimal user experience."],
    //     tech: [reactLogo, htmlLogo, sassLogo, javascriptLogo, apiLogo]
    // },
]

export const album = [
    { id: 1, src: htmlLogo, alt: 'html logo' },
    { id: 2, src: cssLogo, alt: 'css logo' },
    { id: 3, src: javascriptLogo, alt: 'javaScript logo' },
    { id: 4, src: typecriptLogo, alt: 'typecript logo' },
    { id: 5, src: tailwind, alt: 'tailwind logo' },
    { id: 6, src: reactLogo, alt: 'react logo' },
    { id: 7, src: sassLogo, alt: 'sass logo' },
    { id: 8, src: apiLogo, alt: 'restApi logo' },
    { id: 9, src: reduxLogo, alt: 'redux logo' },
    { id: 10, src: figmaLogo, alt: 'figma logo' },
    { id: 11, src: materialLogo, alt: 'mui logo' },
]

export const famaliar = [
    { id: 1, name: 'Firebase' },
    { id: 2, name: 'Redux' },
    { id: 3, name: 'Figma' },
]

export const skills = [
    { id: 1, skillName: 'React', explain: 'I leverage the power of React Hooks, including useState and useEffect. Skilled in conditional rendering, I dynamically adjust content based on specific conditions. Additionally, I navigate seamlessly through React Router for efficient navigation and URL handling. Proficient in leveraging the Context API, I manage global state without external libraries.' },
    { id: 2, skillName: 'Javascirpt', explain: 'Experienced in advanced JavaScript concepts, including ES6+ features, asynchronous programming using Promises and async/await. Adept at effective error handling techniques, utilizing try/catch and managing asynchronous errors seamlessly.' },
    { id: 3, skillName: 'typeScript', explain: 'Advanced in TypeScript, leveraging static typing and interfaces to build robust, large-scale applications with enhanced code reliability and maintainability.' },
    { id: 4, skillName: 'Tailwind', explain: 'Expert in Tailwind CSS, utilizing its utility-first approach to rapidly design responsive and custom user interfaces without writing extensive custom CSS.' },
    { id: 5, skillName: 'HTML5, CSS3', explain: 'Experienced in HTML and CSS. Proficient in crafting responsive design patterns, optimizing web performance, and implementing CSS Grid for advanced layouts.' },
    { id: 6, skillName: 'Sass', explain: 'Proficient in creating reusable styles through mixins and extending inheritance for code efficiency. Additionally, adept at optimizing styles with color functions and leveraging media queries for responsive design.' },
    { id: 7, skillName: 'Rest API', explain: 'Understanding and utilizing various HTTP methods like GET, POST, PUT and DELETE. Knowledge of HTTP status codes to interpret the outcome of API requests. Capable of fetching APIs seamlessly using both the native Fetch API and the Axios library.' },
    { id: 8, skillName: 'Version Control', explain: 'Proficient in Git and version control practices, adept at managing branching strategies, resolving complex merge conflicts, and maintaining a clean commit history for collaborative projects.' },
    // { id: 9, skillName: 'material ui', explain: 'Skilled in Material-UI, I design sleek and responsive user interfaces for enhanced user experiences' },
]

export const headerItem = [
    { id: 1, item: 'Home', href: '#home' },
    { id: 2, item: 'About', href: '#about' },
    { id: 3, item: 'Skills', href: '#skill' },
    { id: 4, item: 'Latest project', href: '#project' },
    { id: 5, item: 'Contact', href: '#contact' }
]