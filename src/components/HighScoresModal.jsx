import React from "react";

const highScoresTable = (props) => {
    if (props.highScores.length == 0) {
        return <p className="content">No high scores saved yet, be the first!</p>
    } else {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {props.highScores.map((score, index) => {
                        return (
                            <tr key={score.id}>
                                <td>{index + 1}</td>
                                <td>{score.name}</td>
                                <td>{score.score}</td>
                            </tr>
                        );                 
                    })}
                </tbody>
            </table>
        );
    }
}

const HighScoresModal = (props) => {
    return (
        <div className={"modal" + (props.active ? " is-active" : "")}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <article className="message is-large is-warning">
                    <div className="message-header">
                        <p>High Scores</p>
                    </div>
                    <div className="message-body">
                        {highScoresTable(props)}
                        <div className="control">
                            <a href="#" className="button" onClick={props.onClose}>Close</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default HighScoresModal;