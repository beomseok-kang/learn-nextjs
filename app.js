// next rendering and express server separated

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/getdata", (req, res) => {
  return res.send("Responding from server!");
});

app.listen(8000);
