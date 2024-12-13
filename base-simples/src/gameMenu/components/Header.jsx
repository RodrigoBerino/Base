import React from "react";
import styles from "../styles/Header.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/db7689319191a3836ec4228421ce33daa5a8268f57bada50520dc1c082442883?placeholderIfAbsent=true&apiKey=078f29df932b4c87b095739c7eacbdd8"
          alt="Game Logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.userControls}>
        <div className={styles.notificationButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0b79c47f07055bb79519fdcfbd5695b5559d34899d32c8bb216256b902edd6e?placeholderIfAbsent=true&apiKey=078f29df932b4c87b095739c7eacbdd8"
            alt="Notifications"
            className={styles.notificationIcon}
          />
        </div>
        <div className={styles.userDropdown}>
          <div className={styles.userProfile}>
            <div className={styles.profileInfo}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84c3cca97b669673a3f4a8190afe20071078fd71100297cb12ba869d0bf25055?placeholderIfAbsent=true&apiKey=078f29df932b4c87b095739c7eacbdd8"
                alt="User Avatar"
                className={styles.avatar}
              />
              <div className={styles.username}>Aluno</div>
            </div>
            <div className={styles.dropdownTrigger}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10df4fc2b57f768ff2d88efa6ccb2d966daefabaf13ef3491fe825904c757606?placeholderIfAbsent=true&apiKey=078f29df932b4c87b095739c7eacbdd8"
                alt=""
                className={styles.dropdownIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
