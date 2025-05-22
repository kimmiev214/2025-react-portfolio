import React from "react";
import styles from "./Hero.module.css";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Kim</h1>
            <p className={styles.description}>I am a Full Stack Developer and UX Designer with 5 years developing my tech stack.</p>
            <a href="mailto:kimsvillatoro@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/hero/heroImage.png" alt="hero-image" className={styles.heroImg} />
        <div className={styles.bottomBlur}/>
    </section>
};

