import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
    const { t } = useTranslation('projects');
    
    const projects = t('items', { returnObjects: true, defaultValue: [] });

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>{t("ui.sectionTitle")}</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => (
                    <ProjectCard key={id} project={project} />
                ))}
            </div>
        </section>
    );
};