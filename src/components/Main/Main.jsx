import React from "react";
import styles from './Main.module.css'
import { getImageUrl } from "../../utils";

export const Main = () => {
    return <main className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Felipe</h1>
            <p className={styles.description}>I'm a fullstack developer with academic experience and personal projects in backend, frontend, and interface design.
                <p>I enjoy understanding how things work end to end and aim to build solutions that are functional, well-structured, and easy to use.</p>
                <p>Reach out if you'd like to learn more!</p>
            </p>
            <a href="mailto:felipecorreiaribeiro7@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("main/mainImage.png")} alt="Image of me" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </main>
}