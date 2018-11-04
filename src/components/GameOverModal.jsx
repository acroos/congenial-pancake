import React from "react";

export default class GameOverModal extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <div className={"modal" + (this.props.active ? " is-active" : "")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <article className="message is-large is-danger">
                    <div className="message-header">
                        <p>Game Over!</p>
                    </div>
                    <div className="message-body">
                        <label className="label is-large">Score: {this.props.score}</label>
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    ref={(inputRef) => { this.inputRef = inputRef }}
                                    className="input is-rounded"
                                    type="text"
                                    maxLength={50}
                                    placeholder="High Score Name"
                                    onSubmit={() => this.props.onSaveHighScore(this.inputRef.value)} />
                            </div>
                            <div className="control">
                                <a href="#" 
                                    className="button is-rounded" 
                                    onClick={() => this.props.onSaveHighScore(this.inputRef.value)}>
                                    Save High Score
                                </a>
                            </div>
                        </div>
                        <div className="control">
                            <a className="button is-rounded" onClick={this.props.onClose}>Play again</a>
                        </div>
                    </div>
                    </article>
                </div>
            </div>
        );
    }
};
