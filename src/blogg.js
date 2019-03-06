const mysql = require("promise-mysql");
const config = require("../config/config.json");
let db;

(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

const blogg = {
    getAllPosts: async function () {
        let sql = "SELECT * FROM posts ORDER BY id DESC;";

        let res = await db.query(sql);

        return res;
    },

    createPost: async function (body) {
        let sql = `INSERT INTO posts
            (title, body)
            VALUES
            (?, ?)`;

        await db.query(sql, [body.title, body.body]);
    }
};

module.exports = blogg;
