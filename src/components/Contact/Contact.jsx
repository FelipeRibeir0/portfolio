import React from "react";

import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:felipecorreiaribeiro7@gmail.com" target="_blank" rel="noopener noreferrer">felipecorreiaribeiro7@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedlnIcon.png")} alt="Linkedln icon" />
                <a href="https://www.linkedin.com/in/felipe-correia-ribeiro/" target="_blank" rel="noopener noreferrer">Felipe Correia Ribeiro</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/FelipeRibeir0" target="_blank" rel="noopener noreferrer">FelipeRibeir0</a>
            </li>
        </ul>
    </footer>
}