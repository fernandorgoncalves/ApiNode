const read = require("readline-sync");
var nome = "Fernando";
var idade = 33;
var chave_pix = 12345678;
var valor_em_conta = 100;

function mostrarDados() {
  console.clear();
  console.log(".........................");
  console.log("Nome: " + nome);
  console.log(".........................");
  console.log("idade: " + idade);
  console.log(".........................");
  console.log("Chave Pix: " + chave_pix);
  console.log(".........................");
  console.log("valor em conta " + valor_em_conta);
  console.log(".........................");
}
function add_valor(valor) {
  console.clear();
  valor_em_conta += valor;
  console.log("valor em conta: " + valor_em_conta);
}
function sub_valor(valor) {
  console.clear();
  valor_em_conta -= valor;
  console.log("valor em conta: " + valor_em_conta);
}
function mudar_chave(chave) {
  console.clear();
  chave_pix = chave;
  console.log("Nova chave pix: " + chave_pix);
}
var loop = true;
while (loop) {
  console.log("-------------------------");
  console.log("Bem vindo ao nosso banco");
  console.log("O que deseja fazer?");
  console.log("1 - Mostrar seus dados");
  console.log("2 - Fazer um deposito");
  console.log("3 - Fazer um Pix");
  console.log("4 - Alterar minha chave pix");

  var escolha = read.question("Escolha um numero: ");
  if (escolha === "1") {
    mostrarDados();
  } else if (escolha === "2") {
    var valor = read.question("Digite um valor: ");
    add_valor(parseInt(valor));
  } else if (escolha === "3") {
    var valor = read.question("Digite um valor: ");
    var pix = read.question("Digite uma chave pix: ");
    console.log("Você realizou um pix para " + pix);
    sub_valor(parseInt(valor));
  } else if (escolha === "4") {
    var chave = read.question("Digite uma chave pix: ");
    mudar_chave(chave);
  } else {
    console.log("-------------------");
    console.log("opção invalida");
    console.log("-------------------");
  }
}
