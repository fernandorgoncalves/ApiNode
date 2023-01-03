const fs = require("fs");

var usuarios = [];
function read(item, file) {
  return (item = JSON.parse(fs.readFileSync(file)));
}
usuarios = read(usuarios, "bd.json");

function create(array, nome, idade, valor, chave) {
  array.push({
    nome: nome,
    idade: idade,
    valor: valor,
    chave: chave,
  });
  update();
}
function save(file) {
  fs.writeFileSync(file, JSON.stringify(usuarios));
}
function del(array, nome) {
  for (let index = 0; index < array.length; index++) {
    if (nome === array[index].nome) {
      array.splice(index, 1);
    }
  }
  update();
}
function update() {
  save("bd.json");
  read(usuarios, "bd.json");
}

del(usuarios, "jonas")

console.log(usuarios);
