import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <>
      <div className="black-bar"></div>
      <div className="container">
        <br></br>
        <div className="about">
          <div className="about-title">
            <h3>Welcome to the Pokédex App!</h3>
          </div>
          <div className="about-body">
            <div>
              This App is created for Pokémon enthusiast and beginners alike.
              Use the App to find information about all the Pokémons in the
              Pokémon world, and use it in your gameplay or just for discussions
              with friends!
            </div>
          </div>

          <br></br>

          <div className="about-title">
            <h3>How to Use</h3>
          </div>
          <div className="about-body">
            <div>
              There are two ways you can go about searching for Pokémons.
              <ul>
                <li>
                  Use the searchbar and type any Pokémon name or an ID (from 1
                  to 1017) to display in the Pokédex.
                </li>
                <li>
                  Click on any icons you see at the bottom half of the page to
                  display the selected Pokémon in the Pokédex!
                </li>
              </ul>
            </div>
          </div>

          <br></br>

          <div className="about-title">
            <h3>Credits</h3>
          </div>
          <div className="about-body">
            <div>
              This App taps on the data and information retrieved from the
              <a href="https://pokeapi.co/">PokeAPI</a> website. Many thanks to
              the team for their hardwork to create and maintain the database,
              without which this App would not be fully functional.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
