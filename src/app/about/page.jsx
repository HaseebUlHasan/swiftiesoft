import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/about.jpg" fill alt="about pic" className={styles.image} />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.title}> About me</div>
        <div className={styles.desc}>
          SwiftieSoft was founded in 2021 by a group of talented software
          engineers and designers who shared a common vision: to provide
          top-notch software development services. Since then, we have been on a
          journey of continuous growth and innovation, working with clients from
          around the world and delivering solutions that make a difference.
        </div>
      </div>
    </div>
  );
};

export default About;
