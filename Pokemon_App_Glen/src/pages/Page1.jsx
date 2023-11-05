import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page1.module.css";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

const Page1 = () => {
  return (
    <header className="pokedex">
      <h3>Search Your Pokemon using the Pokedex</h3>
      <PokemonInfo />
      <div className="cards-section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </header>
  );
};

export default Page1;
