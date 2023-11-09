import React from "react";

const PokemonInfo = (props) => {
  // console.log(props.pokedex);
  return (
    <>
      {!props.pokedex ? (
        <div className="default-info">
          <img src="./public/pokeballIcon.png" />
          <p>Please select your Pokémon! Try clicking on any icon below.</p>
        </div>
      ) : (
        <div className="pokemon-info">
          <h3>
            {props.pokedex.name} (ID: {props.pokedex.id})
          </h3>

          <img
            src={props.pokedex.sprites.other.dream_world.front_default}
            alt="Picture of Pokémon"
          />

          <div className="pokemon-type">
            <h5> Type: </h5>
            <div className="displayed-type">
              {props.pokedex.types.map((item, idx) => {
                return (
                  <div key={idx}>
                    <h3>{item.type.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ability">
            <h5> Abilities: </h5>
            <div className="displayed-ability">
              {props.pokedex.abilities.map((item, idx) => {
                return (
                  <div key={idx}>
                    <h3>{item.ability.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="base-stat">
              {props.pokedex.stats.map((item, idx) => {
                return (
                  <p key={idx}>
                    {item.stat.name}: {item.base_stat}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonInfo;
