import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt=" "
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/edx.png")} alt="Bootcamp logo" />
            <div className={styles.aboutItemText}>
              <h3>Bootcamp edX</h3>
              <p>Front-End Web Development</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(" ")} alt="Uni icon" />
            <div className={styles.aboutItemText}>
              <h3>John Moores University</h3>
              <p>
                Diploma of Higher Education Diploma in Criminology and Sociology
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
