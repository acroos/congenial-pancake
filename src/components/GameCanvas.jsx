import React from "react";
import LetterRow from "./LetterRow";
import FallingLetters from "./FallingLetters";

const GameCanvas = (props) => {
    return (
        <svg>
            <LetterRow />
            <FallingLetters letters={props.letters} />
        </svg>
    )
};

export default GameCanvas;