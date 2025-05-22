import React from "react";
import styles from "./About.module.css";


export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src="assets/about/aboutImage.png" alt="Me sitting with laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src="assets/about/cursorIcon.png" alt="Curser Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Frontend Developer with experience in building responsive websites.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src="assets/about/serverIcon.png" alt="Server Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized back-end programs.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src="assets/about/uiIcon.png" alt="UI Icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI/UX Designer</h3>
                    <p>I have designed multiple landing pages and have created low and high-fidelity prototypes, design systems and more.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
};
