import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Courses.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Courses = () => {
    const { t } = useTranslation('courses');
    
    const courses = t('items', { returnObjects: true, defaultValue: [] });

    return (
<section className={styles.container} id="courses">
  <div className={styles.content}>
    <div className={styles.skills}>
      <h2 className={styles.title}>{t("ui.stackTitle")}</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.courses}>
      <h2 className={styles.title}>{t("ui.coursesTitle")}</h2>
      <ul className={styles.courseList}>
        {courses.map((course, id) => (
          <li key={id} className={styles.courseItem}>
            <img src={getImageUrl(course.imageSrc)} alt={`${course.role} certificate`} />
            <div className={styles.courseItemDetails}>
              <h3>{`${course.role} (${course.organisation})`}</h3>
              <p>{course.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

    );
};