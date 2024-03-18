import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Princess Going Digital</h1>
        <p className={styles.description}>
          I have been through a journey recently of discovering my new talents
          and passions. I came across coding organically by questioning how
          websites work, this spark and insatialble thirst for knowledge that
          landed me at the skills for life bootcamp. I believe that my hard work
          shines through with all of my projects and I'm incredily proud to have
          learnt new skills that I can't wait to apply!
          <br />
          Welcome to my portfolio, I invite you to explore my projects! <br />
          Let's connect, collaborate, improve, empower and GET THIS BREAD!{" "}
          <br />
        </p>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a
                href="mailto:hazelhannah48@gmail.com"
                className={styles.contactBtn}
              >
                Contact Me
              </a>
            </li>
            <li className={styles.link}>
              <a href="mailto:hazelhannah48@gmail.com">
                <img
                  src={getImageUrl("hero/email.png")}
                  alt="Email icon"
                  className={styles.email}
                />
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://www.linkedin.com/in/hannahhazel">
                <img
                  src={getImageUrl("hero/linkedin.png")}
                  alt="LinkedIn icon"
                />
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://github.com/hannahhazel-alt">
                <img
                  src={getImageUrl("hero/githubWhite.png")}
                  alt="Github icon"
                />
              </a>
            </li>
            <li className={styles.link}>
              <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
                <img src={getImageUrl("hero/cv.png")} alt="CV icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
