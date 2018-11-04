import React from "react";
import { getScores } from "../utils/ScoreUtils.js";

export default class HighScoresModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highScores: props.highScores,
            currentDifficultyTab: props.difficulty
        }
    }

    componentDidMount() {
        this.updateScores();
    }

    updateScores() {
        getScores(this.state.currentDifficultyTab)
            .then((scores) => {
                let sortedScores = scores.sort((a,b) => { b.score - a.score });
                let trimmedScores = sortedScores.slice(0, 9);
                this.setState({ highScores: trimmedScores });
            });
    }

    highScoresTable() {
        if (this.state.highScores == undefined || this.state.highScores.length == 0) {
            return <p className="content">No high scores saved yet, be the first!</p>
        } else {
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.highScores.map((score, index) => {
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

    tab(difficulty, name) {
        const classes = "tab" + (this.state.currentDifficultyTab == difficulty ? " is-active" : "");
        const onClick = () => {
            this.setState(
                { currentDifficultyTab: difficulty },
                () => this.updateScores()
                );
        }

        return (
            <li
                className={classes}
                onClick={onClick}>
                <a>{name}</a>
            </li>
        )
    }

    tabBar() {
        return (
            <div className="tabs is-center">
                <ul>
                    {this.tab(0, "Too Easy")}
                    {this.tab(1, "Easy")}
                    {this.tab(2, "Medium")}
                    {this.tab(3, "Hard")}
                    {this.tab(4, "Too Hard")}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className={"modal" + (this.props.active ? " is-active" : "")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <article className="message is-large is-warning">
                        <div className="message-header">
                            <p>High Scores</p>
                        </div>
                        <div className="message-body">
                            {this.tabBar()}
                            {this.highScoresTable()}
                            <div className="control">
                                <a href="#" className="button" onClick={this.props.onClose}>Close</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}
