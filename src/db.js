import Dexie from "dexie";

const db = new Dexie("CongenialPancakeDb");
db.version(1).stores({
    highScores: "++id, score"
});

export default db;
