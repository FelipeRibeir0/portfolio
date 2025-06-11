import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Imports para EN
import enAbout from '../locale/en/about.json';
import enCourses from '../locale/en/courses.json';
import enEducation from '../locale/en/education.json';
import enProjects from '../locale/en/projects.json';
import enProjectsOverview from '../locale/en/projects-overview.json';
import enContact from '../locale/en/contact.json';
import enMain from '../locale/en/main.json';
import enNavbar from '../locale/en/navbar.json';
import enProjectCard from '../locale/en/projectCard.json';
import enProjectsUI from '../locale/en/projects-ui.json';

// Imports para PT
import ptAbout from '../locale/pt/about.json';
import ptCourses from '../locale/pt/courses.json';
import ptEducation from '../locale/pt/education.json';
import ptProjects from '../locale/pt/projects.json';
import ptProjectsOverview from '../locale/pt/projects-overview.json';
import ptContact from '../locale/pt/contact.json';
import ptMain from '../locale/pt/main.json';
import ptNavbar from '../locale/pt/navbar.json';
import ptProjectCard from '../locale/pt/projectCard.json';
import ptProjectsUI from '../locale/pt/projects-ui.json';

// Import para ES
import esAbout from '../locale/es/about.json';
import esCourses from '../locale/es/courses.json';
import esEducation from '../locale/es/education.json';
import esProjects from '../locale/es/projects.json';
import esProjectsOverview from '../locale/es/projects-overview.json';
import esContact from '../locale/es/contact.json';
import esMain from '../locale/es/main.json';
import esNavbar from '../locale/es/navbar.json';
import esProjectCard from '../locale/es/projectCard.json';
import esProjectsUI from '../locale/es/projects-ui.json';

const savedLanguage = localStorage.getItem('language') || 'pt';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: enAbout,
        contact: enContact,
        courses: enCourses,
        education: enEducation,
        projects: enProjects,
        'projects-overview': enProjectsOverview,
        'projects-ui': enProjectsUI,
        ProjectCard: enProjectCard,
        main: enMain,
        navbar: enNavbar
      },
      pt: {
        about: ptAbout,
        contact: ptContact,
        courses: ptCourses,
        education: ptEducation,
        projects: ptProjects,
        'projects-overview': ptProjectsOverview,
        'projects-ui': ptProjectsUI,
        ProjectCard: ptProjectCard,
        main: ptMain,
        navbar: ptNavbar,

      },
      es: {
        about: esAbout,
        contact: esContact,
        courses: esCourses,
        education: esEducation,
        projects: esProjects,
        'projects-overview': esProjectsOverview,
        'projects-ui': esProjectsUI,
        ProjectCard: esProjectCard,
        main: esMain,
        navbar: esNavbar
      },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    ns: ['projects', 'projects-ui'],
    defaultNS: 'projects'
  });

export default i18n;
