import React from "react";

const Card = (props) => {
  return (
    <>
      {props.pokeData.map((item, idx) => {
        return (
          <div
            className="card col-md-3"
            key={idx}
            onClick={() => {
              props.setPokedex(item);
            }}
          >
            <img
              src={item.sprites.other.dream_world.front_default}
              alt="Pictures of selected Pokemon"
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
