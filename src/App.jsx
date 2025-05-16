import styles from './App.module.css'
import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { About } from './components/About/About'
import { Courses } from './components/Courses/Courses'
import { Education } from './components/Education/Education'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import ScrollRevealSection from './components/ScrollRevealSection/ScrollRevealSection'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <ScrollRevealSection direction="top"><Main /></ScrollRevealSection>
      <ScrollRevealSection direction="right"><About /></ScrollRevealSection>
      <ScrollRevealSection direction="left"><Courses /></ScrollRevealSection>
      <ScrollRevealSection direction="top"><Education /></ScrollRevealSection>
      <ScrollRevealSection direction="right"> <Projects /></ScrollRevealSection>
      <ScrollRevealSection direction="bottom"><Contact /></ScrollRevealSection>
    </div>
  )
}

export default App
