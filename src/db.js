import Dexie from "dexie";

const db = new Dexie("CongenialPancakeDb");
db.version(1).stores({
    highScores: "++id, score"
});

db.version(2).stores({
    highScores: "++id, score, difficulty"
});

export default db;
