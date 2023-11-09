import React from "react";

const Card = (props) => {
  return (
    <>
      {props.pokeData.map((item, idx) => {
        return (
          <div
            className="card"
            key={idx}
            onClick={() => {
              props.setPokedex(item);
              // console.log(props.pokedex);
              window.scrollTo({ top: 90, behaviour: "smooth" });
            }}
          >
            <img
              src={item.sprites.other.dream_world.front_default}
              alt="Pictures of Selected Pokemon"
              key={item.id}
            />
            <h5>{item.name}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Card;
