import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "../Modal/Modal";
import { Slider } from "../Slider/Slider";
import { getImageUrl } from "../../utils";
import allSkills from "../../data/skills.json";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
    const [openOverviewModal, setOpenOverviewModal] = useState(false);
    const [openTeamModal, setOpenTeamModal] = useState(false);
    const { t } = useTranslation('projects-ui');

    const {
        title,
        imageSrc,
        description,
        skills = [],
        demo,
        source,
        overview = false,
        team = null
    } = project;

    const skillColorMap = Object.fromEntries(
        allSkills.map((skill) => [skill.title, skill.color])
    );

    const hasTeam = team && team.length > 0;

    return (
        <div className={`${styles.containerCard} ${(openOverviewModal || openTeamModal) ? styles.disableHover : ''}`}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`${title} project screenshot`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    const bgColor = skillColorMap[skill] || "#444";

                    return (
                        <li
                            key={id}
                            className={styles.skill}
                            style={{
                                backgroundColor: bgColor
                            }}
                        >
                            {skill}
                        </li>
                    );
                })}
            </ul>

            <div className={styles.links}>
                {demo && (
                    <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                        {t("ui.demo")}
                    </a>
                )}
                {source && (
                    <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                        {t("ui.source")}
                    </a>
                )}
                {overview && (
                    <button
                        onClick={() => setOpenOverviewModal(true)}
                        className={styles.link}
                    >
                        {t("ui.overview")}
                    </button>
                )}
                {hasTeam && (
                    <button
                        onClick={() => setOpenTeamModal(true)}
                        className={styles.link}
                    >
                        {t("ui.team")}
                    </button>
                )}
            </div>

            {/* Modals */}
            {overview && (
                <Modal
                    isOpen={openOverviewModal}
                    onClose={() => setOpenOverviewModal(false)}
                >
                    <Slider projectTitle={title} />
                </Modal>
            )}

            {hasTeam && (
                <Modal
                    isOpen={openTeamModal}
                    onClose={() => setOpenTeamModal(false)}
                >
                    <ul className={styles.members}>
                        {team.map((member) => (
                            <li key={member.id} className={styles.member}>
                                <a href={member.link} target="_blank" rel="noopener noreferrer">
                                    {member.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Modal>
            )}
        </div>
    );
};