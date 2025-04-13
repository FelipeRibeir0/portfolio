import React from 'react';
import styles from './Modal.module.css';
import { getImageUrl } from '../../utils';

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlays} onClick={onClose}>
            <section className={styles.container} onClick={e => e.stopPropagation()}>
                <img 
                    src={getImageUrl("modal/closeIcon.png")} 
                    alt="Close icon" 
                    className={styles.closeButton} 
                    onClick={onClose}
                />
                <div className={styles.content}>
                    {children}
                </div>
            </section>
        </div>
    );
};