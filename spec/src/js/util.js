var num1 = "";
var num2 = "";
var res = "";
var operacao = "";
var txtInput = document.getElementById("resultado");
txtInput.value = "0";

function definirOperacao(valor) {
  calcular();
  operacao = valor;
}

function adicionarNumero(numero) {
  if (operacao === "") {
    num1 = obterNumero(numero, num1);
  } else {
    num2 = obterNumero(numero, num2);
  }
}

function obterNumero(novoNumero, numeroAtual) {
  if (
    numeroAtual.length == 10 ||
    (novoNumero === "." && numeroAtual.indexOf(".") >= 0)
  ) {
    return;
  }
  if (novoNumero === "." && (txtInput.value === "0" || numeroAtual === "")) {
    numeroAtual = "0";
  }
  txtInput.value = numeroAtual + novoNumero;
  return txtInput.value;
}

function limpar() {
  num1 = "";
  num2 = "";
  operacao = "";
  txtInput.value = "0";
}

function calcular() {
  if (num1 === "" || num2 === "" || operacao === "") {
    return;
  }
  var res = "";
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operacao) {
    case "+":
      res = Calculadora.adicionar(num1, num2);
      break;
    case "-":
      res = Calculadora.subtrair(num1, num2);
      break;
    case "/":
      res = Calculadora.dividir(num1, num2);
      break;
    case "*":
      res = Calculadora.multiplicar(num1, num2);
      break;
  }
  res = res.toString();
  txtInput.value = res.length <= 10 ? res : res.substr(0, 10);
  num1 = txtInput.value;
  num2 = "";
  operacao = "";
}
