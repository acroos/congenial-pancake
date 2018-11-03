import React from "react";
import LetterRow from "./LetterRow";
import FallingLetters from "./FallingLetters";
import { maxHeight } from "../utils/LetterUtils.js";

const GameCanvas = (props) => {
    const bottomLetterHeight = maxHeight(props.letters);
    const classNumber = Math.floor((bottomLetterHeight - 30) / 125);

    return (
        <svg className={`letterDistance${classNumber}`}>
            <LetterRow />
            <FallingLetters letters={props.letters} />
        </svg>
    )
};

export default GameCanvas;