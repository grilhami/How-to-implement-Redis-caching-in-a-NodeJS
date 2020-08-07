const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const { eruptionRoute} = require("./routes");

app.use("/eruptions", eruptionRoute);

app.get("/", (req, res) => {
  res.send(
    `Let's implement Redis caching in NodeJS!`
  );
});

app.listen(PORT, () => {
  console.log("Listening in port " + PORT);
});