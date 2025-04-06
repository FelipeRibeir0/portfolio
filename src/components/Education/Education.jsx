import React from "react";
import education from "../../data/education.json"

import styles from "./Education.module.css"
import { getImageUrl } from "../../utils";

export const Education = () => {
    return <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <ul className={styles.education}>
                {
                    education.map((educationItem,id ) => {
                        return <li key={id} className={styles.educationItem}>
                            <img src={getImageUrl(educationItem.imageSrc)} alt={`${educationItem.organisation} Logo`} />
                        <div className={styles.educationItemDetails}>
                            <h3>{`${educationItem.role}, ${educationItem.organisation}`}</h3>
                            <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                            <p>{educationItem.description}</p>
                        </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
}