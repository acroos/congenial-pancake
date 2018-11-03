import React from "react";
import { xPositionForLetter } from "../utils/LetterUtils.js";

const LetterRow = (props) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const height = "30";
    
    return letters.map((letter) => {
        return (
            <text x={xPositionForLetter(letter)} 
                y={height} key={letter} 
                className="topRowLetter">
                {letter}
            </text>);
    });
};

export default LetterRow;