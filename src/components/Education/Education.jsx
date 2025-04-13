import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
    const { t } = useTranslation('education');
    
    const educationData = t('items', { returnObjects: true });

    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>{t("title")}</h2>
            <div className={styles.content}>
                <ul className={styles.education}>
                    {educationData.map((item, id) => (
                        <li key={id} className={styles.educationItem}>
                            <img 
                                src={getImageUrl(item.imageSrc)} 
                                alt={`${item.organisation} Logo`} 
                            />
                            <div className={styles.educationItemDetails}>
                                <h3>{`${item.role}, ${item.organisation}`}</h3>
                                <p>{`${item.startDate} - ${item.endDate}`}</p>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};