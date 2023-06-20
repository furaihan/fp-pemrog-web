const express = require("express");
const accountRoutes = require("./routes/accountRoutes");
const app = express();
const port = 3000;

app.use(express.json());
app.use((res, req, next) => {
  res.header("Content-Type", "application/json");
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(accountRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
