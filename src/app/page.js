import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          Welcome to SWIFTIE SOFT <br />
          Empowering Innovation <br /> Through Technology <br />
        </div>

        <div className={styles.desc}>
          We turn your dreams into reality and pave the way for your business to
          grow!
        </div>
      </div>

      <div className={styles.imageCont}>
        <Image
          src="/hero.jpg"
          fill
          alt="swiftiesoft logo"
          className={styles.image}
        />
      </div>
    </div>
  );
}
