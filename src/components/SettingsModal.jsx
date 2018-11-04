import React from "react";

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
                                <a className="button is-light" 
                                    href="#" 
                                    onClick={() => props.onDifficultyChange(4)}
                                    disabled={props.difficulty == 4}>
                                    Too Easy
                                </a>
                                <a className="button is-success"
                                    href="#"
                                    onClick={() => props.onDifficultyChange(3)}
                                    disabled={props.difficulty == 3}>
                                    Easy
                                </a>
                                <a className="button is-warning"
                                    href="#"
                                    onClick={() => props.onDifficultyChange(2)}
                                    disabled={props.difficulty == 2}>
                                    Medium
                                </a>
                                <a className="button is-danger"
                                    href="#"
                                    onClick={() => props.onDifficultyChange(1)}
                                    disabled={props.difficulty == 1}>
                                    Hard
                                </a>
                                <a className="button is-dark"
                                    href="#"
                                    onClick={() => props.onDifficultyChange(0)}
                                    disabled={props.difficulty == 0}>
                                    Too Hard
                                </a>
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