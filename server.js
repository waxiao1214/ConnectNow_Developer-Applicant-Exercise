const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/send_email", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message" : "Thank you for your contact"}');
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(port);
