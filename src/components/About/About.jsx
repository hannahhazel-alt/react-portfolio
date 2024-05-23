import React from "react";

import styles from "./About.module.css";
import { Hero } from "../Hero/Hero";

export const About = () => {
  return (
    <>
      <Hero />
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={"./assets/about/Logo.png"}
            alt=" "
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={"./assets/about/edx.png"} alt="Bootcamp logo" />
              <div className={styles.aboutItemText}>
                <h3>Bootcamp edX</h3>
                <p>Front-End Web Development</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={"./assets/about/uni.png"} alt="Uni icon" />
              <div className={styles.aboutItemText}>
                <h3>John Moores University</h3>
                <p>
                  Diploma of Higher Education Diploma in Criminology and
                  Sociology
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
