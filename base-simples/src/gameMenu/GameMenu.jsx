import React from "react";
import { Header } from "./components/Header.jsx";
import { WelcomeBanner } from "./components/WelcomeBanner.jsx";
import { Button } from "./components/Button.jsx";
import "./styles/GameMenu.css";

const menuButtons = [
  {
    text: "NOVO JOGO",
    variant: "success",
  },
  {
    text: "MODO HISTÓRIA",
    variant: "primary",
  },
  {
    text: "CONFIGURAÇÕES",
    variant: "primary",
  },
  {
    text: "CONECTAR A SALA #",
    variant: "primary",
  },
];

export const GameMenu = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <WelcomeBanner />
        <div className={styles.content}>
          <div className={styles.gamePreview}>
            <img
              loading="lazy"
             className={styles.previewImage}
            />
          </div>
          <div className={styles.menuButtons}>
            {menuButtons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                variant={button.variant}
                icon={button.icon}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
