const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login"
});

db.connect(err => {
  if (err) {
    console.log("Erro MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND senha = ?";

  db.query(sql, [usuario, senha], (err, result) => {
    if (err) return res.json({ sucesso: false });

    if (result.length > 0) {
      res.json({ sucesso: true });
    } else {
      res.json({ sucesso: false });
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});