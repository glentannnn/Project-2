import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <img src="./public/pikachu.png" alt="Pikachu icon" />
            <NavLink to="/page2">About</NavLink>
          </li>
          <li>
            <img src="./public/pokedex.png" alt="Pokedex icon" />
            <NavLink to="/page1">Pokédex</NavLink>
          </li>
          <li>
            <img src="./public/pokedex.png" alt="Pokedex icon" />
            <NavLink to="/page3">Favourite Pokémons</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
