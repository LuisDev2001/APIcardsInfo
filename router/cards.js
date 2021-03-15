const express = require("express");
const router = express.Router();
const fs = require("fs");
// Metodo "get" para listar productos
router.get("/cards", (request, response, next) => {
  const json_cards = fs.readFileSync("db.json", "utf-8");
  const cards = JSON.parse(json_cards);
  try {
    response.send({
      cards,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
