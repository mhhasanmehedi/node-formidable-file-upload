const express = require("express");
const formidable = require("formidable");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on("fileBegin", function (name, file) {
    file.path = __dirname + "/uploads/" + file.name;
  });

  form.on("file", function (name, file) {
    console.log("Uploaded " + file.name);
  });

  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
