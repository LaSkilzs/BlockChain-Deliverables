const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("src"));
app.use(express.static("build/contracts"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

app.get("*", (req, res) => {
  res.status(404);
  res.send("Ooooops...page not available");
});

app.listen(PORT, () => {
  console.log(`ETB Ethereum ToDo List App running on port ${PORT}`);
});
