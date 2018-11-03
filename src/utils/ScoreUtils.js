import db from "../db";

export const saveScore = (name, score) => {
    db.highScores.add({name: name, score: score});
}

export function getScores() {
    return db.highScores
        .orderBy('score')
        .reverse()
        .limit(10)
        .toArray();
}

export default { saveScore, getScores }