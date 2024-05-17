//import React from "react";
import LeftSection from "../section/LeftSection";
import RightSection from "../section/RightSection";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
