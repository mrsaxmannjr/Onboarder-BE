const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

router.get("/", async (req, res) => {
  const glinks = await queries.getAllLinks();
  res.json(glinks);
});

router.get("/:id", (request, response, next) => {
  queries.findLink(request.params.id).then(glinks => {
    glinks
      ? response.json({ glinks })
      : response.sendStatus(404);
  }).catch(next);
});

router.post("/", (request, response, next) => {
  queries.createLink(request.body).then(glinks => {
    response.status(201).json({ glinks });
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.updateLink(request.params.id, request.body).then(glinks => {
    response.json({ glinks: glinks[0] });
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.deleteLink(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

module.exports = router;