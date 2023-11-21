import React, { useState } from "react";

import "../../Styles/home.css"
import pikachu from "../../Images/Pikachu.png"
import pokeball from "../../Images/pokebal-left.png"
import ash from "../../Images/ash.png"
import cloud from "../../Images/cloud.png"


const Home = () => {

    return(
        <div className="home">
            <div className="home-content">
                <div className="block1">
                    <div className="main-text">
                        <span className="main-text-bold">Find</span> all your favorite <span className="main-text-bold">Pokemon</span>
                    </div>
                    <div className="under-main-text">
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </div>
                    <button className="SeePokemons">
                        See Pokemons
                    </button>
                    <div className="pikachu" style={{ backgroundImage: `url(${pikachu})` }} />
                </div>
                <div className="block2">
                    <img className="ash" src={ash} />
                </div>
            </div>
            <div className="pokeball-left" style={{ backgroundImage: `url(${pokeball})`}}/>
            <div className="pokeball-righ" style={{ backgroundImage: `url(${pokeball})`}}/>
            <div className="cloud1" style={{ backgroundImage: `url(${cloud})`}}/>
            <div className="pokeball-center" style={{ backgroundImage: `url(${pokeball})`}}/>
            <div className="cloud2" style={{ backgroundImage: `url(${cloud})`}}/>
        </div>
    );
};

export default Home;