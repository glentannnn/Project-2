import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

const Page1 = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeData, setPokeData] = useState([]);
  const [pokedex, setPokedex] = useState();

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    getPokemon(data.results);
  };

  const getPokemon = async (arr) => {
    setPokeData([]);
    // console.log({ arr });
    arr.map(async (item) => {
      // console.log(item.url);
      const res = await fetch(item.url);
      const data = await res.json();
      // console.log(data);
      setPokeData((prevState) => {
        prevState = [...prevState, data];
        prevState.sort((a, b) => (a.id > b.id ? 1 : -1));
        return prevState;
        // return [...prevState, data];
      });
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <header className="pokedex">
      <h3>Search Your Pokemon Below</h3>
      <PokemonInfo pokedex={pokedex} />
      <div className="cards-section">
        <Card pokeData={pokeData} setPokedex={setPokedex} />
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setUrl(prevUrl);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setUrl(nextUrl);
          }}
        >
          Next
        </button>
      </div>
    </header>
  );
};

export default Page1;
