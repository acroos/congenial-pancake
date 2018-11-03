import React from "react"
import ReactDOM from "react-dom";
import GamePage from "./components/GamePage";
import "./sass/main.scss";

const app = document.getElementById("app");

const storedDifficulty = localStorage.getItem("difficulty");
let difficulty = parseInt(storedDifficulty);
if (difficulty == NaN) {
    difficulty = 2;
}

ReactDOM.render( <GamePage difficulty={difficulty} />, app);