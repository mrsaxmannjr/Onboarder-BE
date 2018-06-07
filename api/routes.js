const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

router.get("/", async (req, res) => {
  const glinks = await queries.getAll();
  res.json(glinks);
});

module.exports = router;