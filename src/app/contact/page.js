import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          {/*TODO: <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm /> */}
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214842.63467975357!2d74.69514892215734!3d32.714855304135895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84bf169d3525%3A0xf233488eeb8fd8d!2sJammu!5e0!3m2!1sen!2sin!4v1686574196705!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
