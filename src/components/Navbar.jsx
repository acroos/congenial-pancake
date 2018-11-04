import React from "react";

const Navbar = (props) => {
    const pancake = require("../img/pancake.png");

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={props.newGame}>
                    <img src={pancake}></img>
                    <span className="navbar-item">Congenial Pancake</span>
                </a>

                <a className="navbar-burger burger" role="button" aria-label="menu" aria-expanded="false" data-target="navbarMain">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <span className="navbar-item">Score: {props.score}</span>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" onClick={props.newGame}>New Game</a>
                    <a className="navbar-item" onClick={props.onHighScoresClick}>High Scores</a>
                    <a className="navbar-item" onClick={props.onSettingsClick}>Settings</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;