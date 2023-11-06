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
          <div className="ability">
            <div>
              {props.pokedex.abilities.map((item) => {
                return (
                  <div>
                    <h3>{item.ability.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="base-stat">
            <div>
              {props.pokedex.stats.map((item) => {
                return (
                  <p>
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
