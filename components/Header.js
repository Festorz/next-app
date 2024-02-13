import React from "react";
import styles from "../src/styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>
        Keep up to date with latest web dev news
      </p>
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
