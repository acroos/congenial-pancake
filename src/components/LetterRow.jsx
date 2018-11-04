import React from "react";
import { xPositionForLetter } from "../utils/LetterUtils.js";
import Constants from "../constants.js";

const LetterRow = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    return letters.map((letter) => {
        return (
            <text x={xPositionForLetter(letter)} 
                y={Constants.InitialHeight} key={letter} 
                className="topRowLetter">
                {letter}
            </text>);
    });
};

export default LetterRow;