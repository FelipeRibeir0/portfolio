import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider"

import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source, overview } }) => {
    const [openModal, SetModalOpen] = useState(false)
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.links}>
                {demo && (
                    <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                )}
                {source && (
                    <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                        Source
                    </a>
                )}
                {
                    overview && (
                        <>
                            <a onClick={() => SetModalOpen(true)} className={styles.link}>Overview</a>
                            <Modal isOpen={openModal} SetModalOpen={() => SetModalOpen(!openModal)}>
                                <Slider projectTitle={title} />
                            </Modal>
                        </>
                    )
                }
            </div>
        </div>
    );
};
