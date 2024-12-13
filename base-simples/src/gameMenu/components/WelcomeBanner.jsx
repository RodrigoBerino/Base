import React from "react";
import styles from "../styles/WelcomeBanner.css";

export const WelcomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Bem-vindo(a)!</h1>
          <p className={styles.description}>
            Este é o Base, jogo voltado para desenvolver suas habilidades de
            forma interativa
          </p>
        </div>
      </div>
    </div>
  );
};
