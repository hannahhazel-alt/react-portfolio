import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form values
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    // Basic form validation
    if (!name || !email || !message) {
      alert(
        "Please fill in all required fields (Name, Email, and Message) before sending."
      );
      return;
    }

    emailjs
      .sendForm("service_syw1zis", "template_5g1djlf", form.current, {
        publicKey: "OaJqMMFzpoPFoGtMd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Unable to send email. Please try again or use the provided email links."
          );
        }
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:hazelhannah48@gmail.com">hazelhannah48@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/hannahhazel/">
              linkedin.com/HannahHazel
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://github.com/hannahhazel-alt">
              github.com/hannahhazel-alt
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contactForm}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </footer>
  );
};
