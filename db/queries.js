const db = require("./index");

module.exports = {
  getAllLinks() {
    return db("glink");
  },

  findLink(id) {
    return db('glink').where('id', id).first();
  },

  createLink(glink) {
    return db("glink")
      .insert(glink)
      .returning("*")
      .then(record => record[0]);
  },

  updateLink(id, glink) {
    return db("glink")
      .update(glink)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },

  deleteLink(id) {
    return db("glink").delete().where("id", id);
  },
}