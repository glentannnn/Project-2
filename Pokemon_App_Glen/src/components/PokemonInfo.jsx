import React from "react";

const PokemonInfo = (props) => {
  // console.log(props.pokedex);
  return (
    <>
      {!props.pokedex ? (
        <div className="default-info">
          <img src="./public/pokeballIcon.png" />
          <h5>Please select your Pokemon! Try clicking on any icon below.</h5>
        </div>
      ) : (
        <div className="pokemon-info">
          <h5>{props.pokedex.name}</h5>
          <img
            src={props.pokedex.sprites.other.dream_world.front_default}
            alt="Picture of selected Pokemon"
          />
          <div>
            <div className="ability">
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
