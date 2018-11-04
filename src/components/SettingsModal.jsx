import React from "react";
import Constants from "../constants.js";

const SettingsButton = (props, difficulty) => {
    return (
        <a className={`button ${difficulty.buttonClass}`}
            onClick={() => props.onDifficultyChange(difficulty.value)}
            disabled={props.difficulty == difficulty.value}
            key={difficulty.value} >
            {difficulty.name}
        </a>
    )
};

const SettingsModal = (props) => {
    return (
        <div className={"modal" + (props.active ? " is-active" : "")}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <article className="message is-large is-primary">
                    <div className="message-header">
                        <p>Settings</p>
                    </div>
                    <div className="message-body">
                        <div className="field">
                            <label className="label is-large">Difficulty:</label>
                            <div className="buttons">
                                {Constants.Difficulties.map((difficulty) => SettingsButton(props, difficulty))}
                            </div>
                        </div>

                        <div className="control">
                            <a className="button" onClick={props.onClose}>Close</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default SettingsModal;