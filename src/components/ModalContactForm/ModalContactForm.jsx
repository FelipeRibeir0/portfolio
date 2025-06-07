import { useRef } from "react";
import styles from "./ModalContactForm.module.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Modal } from "../Modal/Modal";

export const ModalContactForm = ({ isOpen, onClose }) => {
  const { t } = useTranslation("contact");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          onClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("title")}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id="user_name" required />
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" id="user_email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </Modal>
  );
};
