import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./team.module.css";

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Our Teams </div>

      <div className={styles.teamsDiv}>
        <div className={styles.team}>
          <div className={styles.imageCont}>
            <Image
              src="/rehan.png"
              fill
              alt="team member"
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div> Rehan Ullah </div>
            <div> Full Stack Developer </div>
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
          </div>
        </div>

        <div className={styles.team}>
          <div className={styles.imageCont}>
            <Image
              src="/haseeb.png"
              fill
              alt="team member"
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div> Haseeb Ul Hasan </div>
            <div> Frontend Developer </div>
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
          </div>
        </div>

        <div className={styles.team}>
          <div className={styles.imageCont}>
            <Image
              src="/asim.png"
              fill
              alt="team member"
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div> Muhammad Asim </div>
            <div> Full Stack Developer </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
