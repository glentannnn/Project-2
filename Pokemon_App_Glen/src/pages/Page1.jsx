import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";
import SearchBox from "../components/SearchBox";

const Page1 = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeData, setPokeData] = useState([]);
  const [pokedex, setPokedex] = useState();

  const getData = async () => {
    // console.log("getData");
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    getPokemon(data.results);
  };

  const getPokemon = async (arr) => {
    // console.log({ arr });
    setPokeData(() => {
      return [];
    });
    arr.map(async (item) => {
      // console.log(item.url);
      const res = await fetch(item.url);
      const data = await res.json();
      // console.log(data);
      setPokeData((prevState) => {
        const newState = [...prevState, data];
        // prevState = [...prevState, data];
        newState.sort((a, b) => (a.id > b.id ? 1 : -1));
        return newState;
        // return [...prevState, data];
      });
    });
  };

  useEffect(() => {
    // console.log("useEffect");
    getData();
  }, [url]);

  // console.log(pokeData.length);

  return (
    <header className="pokedex">
      <div className="black-bar"></div>
      {/* <h3>Search Your Pokemon Below</h3> */}
      <p> Input Pokémon Name Or Any Number From 1 to 1017. </p>
      <SearchBox setPokedex={setPokedex} pokeData={pokeData} />
      <PokemonInfo pokedex={pokedex} pokedata={pokeData} />
      <div className="cards-section">
        <Card pokedex={pokedex} setPokedex={setPokedex} pokeData={pokeData} />
      </div>
      <div className="buttons">
        {prevUrl && (
          <button
            onClick={() => {
              setUrl(prevUrl);
            }}
          >
            Prev
          </button>
        )}
        {nextUrl && (
          <button
            onClick={() => {
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}
      </div>
    </header>
  );
};

export default Page1;
