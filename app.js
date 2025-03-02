const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello World!");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200);
  res.send(id);
});

app.post("/", (req, res) => {
  const payload = req.payload;
  res.status(200);
  res.send(payload?.title);
});

app.put("/:id", (req, res) => {
  const payload = req.payload;
  res.status(200);
  res.send(payload?.title);
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
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
