import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import {About } from './components/About/About'
import { Courses } from './components/Courses/Courses'
import { Education } from './components/Education/Education'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
     <div className={styles.App}>
      <Navbar />
      <Main />
      <About />
      <Courses />
      <Education />
      <Projects />
      <Contact />
     </div>
  )
}

export default App
