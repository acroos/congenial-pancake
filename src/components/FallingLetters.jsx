import React from "react";
import { xPositionForLetter } from "../utils/LetterUtils.js";

const FallingLetters = (props) => {
    return props.letters.map((letter) => {
        return (
            <text x={xPositionForLetter(letter.value)}
                y={letter.height}
                key={`${letter.value}x${letter.height}`}
                className="fallingLetter">
                {letter.value}
            </text>);
    });
};

export default FallingLetters;