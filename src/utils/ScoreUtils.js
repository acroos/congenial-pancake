import db from "../db";

export const saveScore = (name, score, difficulty) => {
    db.highScores.add({
        name: name,
        score: score,
        difficulty: difficulty
    });
}

export function getScores(difficulty) {
    return db.highScores
        .where('difficulty')
        .equals(difficulty)
        .toArray();
}

export default { saveScore, getScores }