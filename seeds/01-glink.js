const glinks = require("../data/glinks-seed-data");

exports.seed = async function (knex, Promise) {
  await knex("glink").del();
  await knex("glink").insert(glinks);
};
