const db = require("./index");

module.exports = {
  getAll() {
    return db("glink");
  },
}