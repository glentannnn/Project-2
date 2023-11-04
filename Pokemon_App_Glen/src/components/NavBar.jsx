import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/page1">Page 1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">Page 2</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
