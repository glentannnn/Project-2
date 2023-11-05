import React from "react";

const PokemonInfo = () => {
  return (
    <div className="pokemon-info">
      <h5>Charmander</h5>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
        alt="Picture of selected Pokemon"
      />
      <div className="ability">
        <div>
          <h3>Blaze</h3>
        </div>
        <div>
          <h3>Solar Power</h3>
        </div>
      </div>

      <div className="base-stat">
        <p>HP: 39</p>
        <p>Att: 52</p>
        <p>Def: 43</p>
        <p>Spc Att: 60</p>
        <p>Spc Def: 50</p>
        <p>Spd: 65</p>
      </div>
    </div>
  );
};

export default PokemonInfo;
