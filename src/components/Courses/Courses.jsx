import React from "react";

import styles from "./Courses.module.css";
import skills from "../../data/skills.json";
import courses from "../../data/courses.json";
import { getImageUrl } from "../../utils";

export const Courses = () => {
    return <section className={styles.container} id="courses">
        <h2 className={styles.title}>Courses</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
            </div>
            <ul className={`${styles.course} ${styles.scrollableList}`}>
                {courses.map((course, id) => (
                    <li key={id} className={styles.courseItem}>
                        <img src={getImageUrl(course.imageSrc)} alt={course.role} />
                        <div className={styles.courseItemDetails}>
                            <h3>{`${course.role} (${course.organisation})`}</h3>
                            <p>{course.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}