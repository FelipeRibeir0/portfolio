import React from 'react'
import styles from './Modal.module.css'
import { getImageUrl } from '../../utils';

export default function Modal({ isOpen, SetModalOpen, children }) {
    console.log(isOpen);
    if (isOpen) {
        return (
            <div className={styles.overlays}>
                <section className={styles.container}>
                    <img src={getImageUrl("modal/closeIcon.png")} alt="Close icon" className={styles.closeButton}  onClick={SetModalOpen}/>
                    <div>
                        {children}
                    </div>
                </section>
            </div>
        )
    }
    return null
}
