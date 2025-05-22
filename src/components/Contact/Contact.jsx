import React from 'react';

import styles from "./Contact.module.css";

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="assets/contact/emailIcon.png" alt="email-image" className={styles.img} />
                    <a href="mailto:kimsvillatoro@gmail.com">kimsvillatoro@gmail.com</a></li>
                <li className={styles.link}>
                    <img src="assets/contact/linkedinIcon.png" alt="linkedin-image" className={styles.img} />
                    <a href="https://www.linkedin.com/in/kimberly-villatoro/">linkedin.com/kimberly-villatoro</a></li>
                <li className={styles.link}>
                    <img src="assets/contact/githubIcon.png" alt="github-image" className={styles.img} />
                    <a href="https://github.com/kimmiev214">https://github.com/kimmiev214</a></li>
            </ul>

</footer>
};
