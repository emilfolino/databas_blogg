const mysql = require("promise-mysql");
const config = require("../config/config.json");
let db;

(async function() {
    db = await mysql.createConnection(config);

    process.on("exit", () => {
        db.end();
    });
})();

const category = {
    getAllCategories: async function () {
        let sql = "SELECT * FROM categories ORDER BY id ASC;";

        let res = await db.query(sql);

        return res;
    }
};

module.exports = category;
