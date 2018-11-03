import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={require("../img/pancake.png")}></img>
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
                    <a className="navbar-item" href="/">New Game</a>
                    <a className="navbar-item" href="#" onClick={props.onHighScoresClick}>High Scores</a>
                    <a className="navbar-item" href="#" onClick={props.onSettingsClick}>Settings</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;