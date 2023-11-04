import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page1.module.css";

const Page1 = () => {
  return (
    <header className={styles.pokedex}>
      <h3>Search Your Pokemon using the Pokedex</h3>
    </header>
  );
};

export default Page1;
