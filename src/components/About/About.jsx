import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li><img src={getImageUrl("about/frontend.png")} alt="website code icon" className={styles.aboutItems} />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I build responsive interfaces with HTML, CSS, and JavaScript, always aiming for a good user experience and attention to detail.</p>
                    </div>
                </li>
                <li><img src={getImageUrl("about/backend.png")} alt="system and database icon" className={styles.aboutItems} />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I develop APIs and systems using PHP and Spring Boot, focusing on performance, structure, and best practices.</p>
                    </div>
                </li>
                <li><img src={getImageUrl("about/webDesign.png")} alt="UI Design icon" className={styles.aboutItems} />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I design landing pages and simple design systems, focusing on visual clarity and user experience.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
}