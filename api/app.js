const express = require("express");
const app = express();
const bd = [{ nome: "Teste" }];
app.use(express.json());
app.get("/", function (req, res) {
  return res.json(bd);
});
app.post("/", function (req, res) {
  const { nome, idade, saldo, chave } = req.body;
  const item = { id: bd.length, nome, idade, saldo, chave };
  bd.push(item);
  return res.json(bd);
});
app.delete("/id", function (req, res) {
  const id = req.params;
  const item = bd.findIndex((element) => element.id == id.id);
  bd.splice(item, 1);
  return res.json(bd);
});
app.put("/id", function (req, res) {
  const id = req.params;
  const item = bd.findIndex((element) => element.id == id.id);
  const { nome, idade, saldo, chave } = req.body;
  const newitem = { id: bd.length, nome, idade, saldo, chave };
  bd[item] = newitem;
  return res.json(bd);
});

app.listen(8080, function () {
  console.log("O servidor esta rodando...");
});
