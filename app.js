const express = require("express");
const cors = require("cors");
const { articles } = require("./utils");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/blog", (req, res) => {
  res.status(200);
  res.send(articles);
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  res.status(200);
  const singleArticle = articles.find((a) => a.id == id);
  res.send(singleArticle);
});

app.post("/blog", (req, res) => {
  const payload = req.payload;
  res.status(200);
  articles.push(payload);
  res.send(payload?.title);
});

app.put("/blog/:id", (req, res) => {
  const payload = req.payload;
  res.status(200);
  res.send(payload?.title);
});

app.delete("/blog/:id", (req, res) => {
  const id = req.params.id;
  articles.filter((a) => a.id === id);
  res.status(200);
  res.send(id);
});

app.use((req, res, err) => {
  res.status(500);
  res.send("Not Found!");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
