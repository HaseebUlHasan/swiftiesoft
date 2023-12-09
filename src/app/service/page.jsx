import Image from "next/image";
import styles from "./service.module.css";

const Service = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Services </div>

      <div className={styles.serviceDiv}>
        <div className={styles.service}>
          <div className={styles.imageCont}>
            <Image src="/web.jpg" fill alt="service" className={styles.image} />
          </div>

          <div className={styles.details}>
            <div className={styles.serviceTitle}> Web App Developement </div>
            <div>
              Our web development service is fueled with innovation, ideas,
              creativity, plus a deep approach towards your goals and
              requirements.
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.imageCont}>
            <Image
              src="/mobile.jpg"
              fill
              alt="service"
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.serviceTitle}> Mobile App Developement </div>
            <div>
              Creating exceptional mobile experiences that solve industry
              challenges for clients ranging from SMEs to large enterprises and
              creative entrepreneurs.
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.imageCont}>
            <Image
              src="/it.jpg"
              fill
              alt="team member"
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.serviceTitle}> IT Consultancy </div>
            <div>
              Our IT consulting services help you improve your product design
              and create a high-techdigital strategy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
