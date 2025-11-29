const express = require("express");
const app = express();

const fs = require("fs");

const port = ;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/submit", (req, res) => {
  const data = `Username: ${req.body.username}, Last Name : ${req.body.lastName}, Email: ${req.body.email}, Password: ${req.body.password}\n`;
  fs.appendFile("data.txt", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    res.redirect('/');
  })
});

app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});