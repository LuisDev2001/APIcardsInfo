const express = require("express");

// APP
const app = express();
const PORT = process.env.PORT || 8000;
// Get products list router api
const cardsAPI = require("./router/cards.js");

// MANDANDO UN MENSAJE PARA QUE ES MUESTRE EN PANTALLA
app.get("/", (request, response) => {
  response.send("Hola cons Express JS");
});
// Api get products list
app.get("/cards", cardsAPI);

// INICIANDO EL SERVIDOR
const server = app.listen(PORT, () => {
  console.log(`Listened http://localhost:${server.address().port}`);
});
