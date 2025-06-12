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

    const {
      VITE_EMAILJS_SERVICE_ID: serviceId,
      VITE_EMAILJS_TEMPLATE_ID: templateId,
      VITE_EMAILJS_PUBLIC_KEY: publicKey,
    } = import.meta.env;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          form.current.reset();
          onClose();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("titleModal")}</h1>
        <form ref={form} onSubmit={sendEmail} noValidate>
          <label htmlFor="userName">{t("userName")}</label>
          <input
            type="text"
            name="userName"
            id="userName"
            required
            maxLength={50}
            title="Seu nome completo (máx. 50 caracteres)"
            autoComplete="off"
          />
          <label htmlFor="userEmail">{t("userEmail")}</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            required
            maxLength={70}
            title="Insira um e-mail válido (máx. 70 caracteres)"
            autoComplete="off"
          />
          <label htmlFor="subject">{t("subject")}</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            maxLength={70}
            title="Assunto da mensagem (máx. 70 caracteres)"
            autoComplete="off"
          />
          <label htmlFor="message">{t("message")}</label>
          <textarea
            name="message"
            id="message"
            required
            maxLength={1000}
            rows={6}
            title="Escreva sua mensagem (máx. 1000 caracteres)"
          />
          <input type="submit" value={t("sendButton")} />
        </form>
      </div>
    </Modal>
  );
};
