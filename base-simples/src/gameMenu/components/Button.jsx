import React from "react";
import styles from"../styles/Button.css";

export const Button = ({ text, variant = "primary", icon, onClick }) => {
  return (
    <div className={styles.buttonWrapper}>
      <div className={`${styles.buttonContainer} ${styles[variant]}`}>
        <div className={styles.buttonInner}>
          <div className={styles.buttonContent}>
            {icon && (
              <div className={styles.iconWrapper}>
                {icon.map((img, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src={img}
                    alt=""
                    className={styles.icon}
                  />
                ))}
              </div>
            )}
            <div className={styles.buttonText}>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
