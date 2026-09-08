// 1. Verificar maioridade
let idadeMaioridade = Number(prompt("Digite sua idade:"));

if (idadeMaioridade >= 18) {
	alert("Você é maior de idade.");
} else {
	alert("Você é menor de idade.");
}


// 2. Positivo ou negativo
let numeroPositivoNegativo = Number(prompt("Digite um número:"));

if (numeroPositivoNegativo > 0) {
	alert("O número é positivo.");
} else {
	alert("O número é negativo.");
}


// 3. Aprovação em uma prova
let nota = Number(prompt("Digite a nota final do aluno (0 a 100):"));

if (nota >= 60) {
	alert("Aprovado.");
} else {
	alert("Reprovado.");
}


// 4. Positivo, negativo ou zero
let numeroClassificado = Number(prompt("Digite um número:"));

if (numeroClassificado > 0) {
	alert("O número é positivo.");
} else if (numeroClassificado < 0) {
	alert("O número é negativo.");
} else {
	alert("O número é zero.");
}


// 5. Classificação por idade
let idadeClassificacao = Number(prompt("Digite sua idade:"));

if (idadeClassificacao < 0) {
	alert("Idade inválida.");
} else if (idadeClassificacao <= 12) {
	alert("Criança.");
} else if (idadeClassificacao <= 17) {
	alert("Adolescente.");
} else {
	alert("Adulto.");
}

// 6. Par ou ímpar
let numeroParOuImpar = Number(prompt("6. Digite um número inteiro:"));

if (numeroParOuImpar % 2 === 0) {
	alert("O número é par.");
} else {
	alert("O número é ímpar.");
}

// Nível intermediário

// 1. Calculadora simples
let primeiroNumero = Number(prompt("Calculadora - digite o primeiro número:"));
let operacao = prompt("Digite a operação desejada (+, -, * ou /):");
let segundoNumero = Number(prompt("Digite o segundo número:"));
let resultado;

if (operacao === "+") {
	resultado = primeiroNumero + segundoNumero;
	alert(`Resultado: ${resultado}`);
} else if (operacao === "-") {
	resultado = primeiroNumero - segundoNumero;
	alert(`Resultado: ${resultado}`);
} else if (operacao === "*") {
	resultado = primeiroNumero * segundoNumero;
	alert(`Resultado: ${resultado}`);
} else if (operacao === "/") {
	resultado = primeiroNumero / segundoNumero;
	alert(`Resultado: ${resultado}`);
} else {
	alert("Erro: operação inválida.");
}


// 2. Maior entre três números
let primeiroNumeroMaior = Number(prompt("Digite o primeiro número:"));
let segundoNumeroMaior = Number(prompt("Digite o segundo número:"));
let terceiroNumeroMaior = Number(prompt("Digite o terceiro número:"));
let maiorNumero = Math.max(primeiroNumeroMaior, segundoNumeroMaior, terceiroNumeroMaior);

alert(`O maior número é ${maiorNumero}.`);