import React from "react";
import styles from "./contact.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShareIcon from "@mui/icons-material/Share";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Get in touch</div>

      <div className={styles.contactDiv}>
        <div className={styles.contact}>
          <div className={styles.heading}> Phone </div>
          <div className={styles.subHeading}> +92 3419203004</div>
          <div className={styles.icon}>
            <CallIcon sx={{ color: "#bbb" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Email </div>
          <div className={styles.subHeading}> info@swifitesoft.com </div>
          <div className={styles.icon}>
            <EmailIcon sx={{ color: "#bbb" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Address </div>
          <div className={styles.subHeading}> Kotha Topi Swabi </div>
          <div className={styles.icon}>
            <FmdGoodIcon sx={{ color: "#bbb" }} />
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.heading}> Follow me </div>
          <div className={styles.socailLinks}>
            <Link href="" target="_blank">
              <FacebookIcon sx={{ color: "#fff " }} />
            </Link>
            <Link href="" target="_blank">
              <InstagramIcon sx={{ color: "#fff " }} />
            </Link>
            <Link href="" target="_blank">
              <LinkedInIcon sx={{ color: "#fff " }} />
            </Link>
            <Link href="" target="_blank">
              <GitHubIcon sx={{ color: "#fff " }} />
            </Link>
          </div>
          <div className={styles.icon}>
            <ShareIcon sx={{ color: "#bbb" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
