import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const meta = new Date("2022-09-20 00:00:00").getTime();

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const dist = meta - now;
      const d = Math.floor(dist / (1000 * 60 * 60 * 24));
      const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((dist % (1000 * 60)) / 1000);
      setTime({ d, h, m, s });
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>MUY PRONTO</h1>
        <div className={styles.fecha}>20 de Septiembre del 2022</div>
        <div className={styles.time}>
          <div className={styles.part}>
            <div className={styles.value}>{time.d}</div>
            <div className={styles.label}>DIAS</div>
          </div>
          <div className={styles.part}>
            <div className={styles.value}>{time.h}</div>
            <div className={styles.label}>HORAS</div>
          </div>
          <div className={styles.part}>
            <div className={styles.value}>{time.m}</div>
            <div className={styles.label}>MINUTOS</div>
          </div>
          <div className={styles.part}>
            <div className={styles.value}>{time.s}</div>
            <div className={styles.label}>SEGUNDOS</div>
          </div>
        </div>
      </div>
      <div className={styles.mp}>
        <img src="/mp.png" alt="Mercado Pago" />
        MiPequenaBelen
      </div>
    </div>
  );
};

export default Home;
