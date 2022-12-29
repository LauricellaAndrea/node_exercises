import express from "express";
import "express-async-errors";

const app = express();

//route
app.get("/series", (request, response) => {
  response.json([
    { name: "Better Call Saul" }, 
    { name: "Breaking Bad" }]);
});

export default app;
//module.exports = app;
