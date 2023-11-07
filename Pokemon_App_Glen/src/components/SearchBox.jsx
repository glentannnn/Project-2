import React, { useRef } from "react";

const SearchBox = (props) => {
  const nameRef = useRef();

  const transformToLowerCase = (string) => {
    return string.toLowerCase();
  };

  const getPokemonViaName = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${transformToLowerCase(
          nameRef.current.value
        )}`
      );
      const data = await res.json();

      if (res.ok) {
        props.setPokedex(data);
        nameRef.current.value = "";
      } else {
        alert("Please spell your Pokemon correctly!");
      }
    } catch (error) {
      alert("Please try again");
    }
  };

  return (
    <div className="search-box">
      <input
        className="col-md-8"
        placeholder="Type the Pokemon Name or ID here"
        ref={nameRef}
      ></input>
      <button onClick={getPokemonViaName}>🔎</button>
    </div>
  );
};

export default SearchBox;
