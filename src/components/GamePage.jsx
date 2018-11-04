import React from "react";
import Navbar from "./Navbar";
import GameArea from "./GameArea";
import { randomLetter, maxHeight } from "../utils/LetterUtils.js";
import GameOverModal from "./GameOverModal";
import SettingsModal from "./SettingsModal";
import HighScoresModal from "./HighScoresModal";
import { saveScore } from "../utils/ScoreUtils";

export default class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            lettersOnBoard: [],
            isPaused: true,
            isFinished: false,
            showSettings: false,
            showHighScores: false,
            difficulty: props.difficulty
        };
    }

    componentWillUnmount() {
        this.stopInterval();
    }

    resetGame() {
        this.setState({
            score: 0,
            lettersOnBoard: [],
            isPaused: true,
            isFinished: false
        })
    }

    startInterval() {
        if (this.state.isFinished) {
            return;
        }

        const baseTime = 
            80 * (2 ** this.state.difficulty);

        const intervalTime = 
            baseTime - Math.min((baseTime - 20), this.state.score)

        this.interval = setTimeout(() => {
            this.updateLetters();
            this.checkForGameOver();
            this.startInterval();
        }, intervalTime);
    }

    stopInterval() {
        if(this.interval) {
            clearTimeout(this.interval);
        }
    }

    updateLetters() {
        let currentLetters = this.state.lettersOnBoard.map((letter) => {
            return { value: letter.value, height: letter.height + 10 };
        });
        let newLetter = randomLetter();
        currentLetters.push({ value: newLetter, height: 30 });

        this.setState({ lettersOnBoard: currentLetters });
    }

    checkForGameOver() { 
        if(maxHeight(this.state.lettersOnBoard) >= 780) {
            this.setState({ isFinished: true });
            this.stopInterval();
        }
    }

    saveHighScore(name) {
        saveScore(name, this.state.score, this.state.difficulty);
        this.resetGame();
    }

    onLetterPress(pressed) {
        if (this.state.isFinished || this.state.isPaused) {
            return;
        }

        const newLetters = this.state.lettersOnBoard.filter((letter) => letter.value != pressed.key.toLowerCase());
        const newScore = this.state.score + (this.state.lettersOnBoard.length - newLetters.length);

        this.setState({ lettersOnBoard: newLetters, score: newScore });
    }

    onPause() {
        this.stopInterval();
        this.setState({ isPaused: true });
    }

    onResume() {
        this.startInterval();
        this.setState({ isPaused: false });
    }

    showSettings() {
        this.setState({ showSettings: true });
    }

    hideSettings() {
        this.setState({ showSettings: false });
    }

    showHighScores() {
        this.setState({ showHighScores: true });
    }

    hideHighScores() {
        this.setState({ showHighScores: false });
    }

    changeDifficulty(difficulty) {
        this.setState({ difficulty: difficulty });
        localStorage.setItem("difficulty", difficulty.toString());
    }

    render() {
        return (
        <div className="container">
            <Navbar
                score={this.state.score}
                onSettingsClick={this.showSettings.bind(this)}
                onHighScoresClick={this.showHighScores.bind(this)}
                newGame={this.resetGame.bind(this)} />
            <GameOverModal
                active={this.state.isFinished}
                score={this.state.score}
                onSaveHighScore={this.saveHighScore.bind(this)}
                onClose={this.resetGame.bind(this)} />
            <SettingsModal
                active={this.state.showSettings}
                onClose={this.hideSettings.bind(this)}
                onDifficultyChange={this.changeDifficulty.bind(this)}
                difficulty={this.state.difficulty} />
            <HighScoresModal
                active={this.state.showHighScores}
                onClose={this.hideHighScores.bind(this)}
                difficulty={this.state.difficulty} />
            <GameArea 
                onLetterPress={this.onLetterPress.bind(this)}
                onPause={this.onPause.bind(this)}
                onResume={this.onResume.bind(this)}
                isPaused={this.state.isPaused}
                letters={this.state.lettersOnBoard} />
        </div>
        )
    }
}