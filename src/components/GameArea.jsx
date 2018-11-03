import React from "react";
import GameCanvas from "./GameCanvas";

const GameArea = (props) => {
    return (
        <div id="gameArea">
            <GameCanvas letters={props.letters} />
            <input
                onFocus={props.onResume}
                onBlur={props.onPause}
                onKeyPress={props.onLetterPress}
                readOnly
                value={props.isPaused ? 'play' : ''} />
            <span hidden={props.isPaused ? true : false}>
                pause
            </span>
        </div>
    );
}

export default GameArea;
