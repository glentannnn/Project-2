import React, { useRef } from "react";

const SearchBox = (props) => {
  const nameRef = useRef();
  //   console.log(nameRef.current.value);
  //   const idRef = useRef();

  const getPokemonViaName = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameRef.current.value}`
      );
      const data = await res.json();

      if (res.ok) {
        props.setPokedex(data);
        nameRef.current.value = "";
      } else {
        alert("Please spell your Pokemon correctly!");
      }
    } catch (error) {
      alert("Please spell your Pokemon correctly!");
    }
  };

  return (
    <div className="search-box">
      <input
        className="col-md-8"
        placeholder="Type the Pokemon name or ID here"
        ref={nameRef}
      ></input>
      <button onClick={getPokemonViaName}>🔎</button>
    </div>
  );
};

export default SearchBox;
