import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider"

import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source, overview, team } }) => {
    const [openOverviewModal, setOpenOverviewModal] = useState(false);
    const [openTeamModal, setOpenTeamModal] = useState(false);
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
                {overview && (
                    <>
                        <a onClick={() => setOpenOverviewModal(true)} className={styles.link}>Overview</a>
                        <Modal isOpen={openOverviewModal} SetModalOpen={() => setOpenOverviewModal(false)}>
                            <Slider projectTitle={title} />
                        </Modal>
                    </>
                )}

                {team && (
                    <>
                        <a onClick={() => setOpenTeamModal(true)} className={styles.link}>Team</a>
                        <Modal isOpen={openTeamModal} SetModalOpen={() => setOpenTeamModal(false)}>
                            <ul className={styles.members}>
                                {team.map((member, index) => (
                                    <li key={index} className={styles.member}>
                                        <a href={member.link} target="_blank" rel="noopener noreferrer">
                                            {member.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Modal>
                    </>
                )}

            </div>
        </div>
    );
};
