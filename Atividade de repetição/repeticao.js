// // 1. Contagem de 1 a 10
console.log("Contagem de 1 a 10");
for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}

// // 2. Tabuada de um número
const numeroTabuada = Number(prompt("Digite um número para ver a tabuada:"));
console.log("2. Tabuada");
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
	console.log(`${numeroTabuada} x ${multiplicador} = ${numeroTabuada * multiplicador}`);
}

// // 3. Soma dos primeiros N números
const limiteSoma = Number(prompt("Digite um número inteiro positivo:"));
let soma = 0;
for (let numero = 1; numero <= limiteSoma; numero++) {
	soma += numero;
}
console.log(`A soma de 1 até ${limiteSoma} é ${soma}.`);

// // 4. Números pares de 1 a 50
console.log("Números pares de 1 a 50");
for (let numero = 1; numero <= 50; numero++) {
	if (numero % 2 === 0) {
		console.log(numero);
	}
}

// // 5. Jogo de adivinhação
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

console.log("Jogo de adivinhação");
do {
	palpite = Number(prompt("Digite um palpite entre 1 e 100:"));

	if (palpite > numeroSecreto) {
		console.log("O número secreto é menor.");
	} else if (palpite < numeroSecreto) {
		console.log("O número secreto é maior.");
	}
} while (palpite !== numeroSecreto);

console.log("Parabéns! Você acertou o número secreto.");

// 6. Contagem regressiva
const inicioContagem = Number(prompt("Digite um número inteiro:"));
console.log("Contagem regressiva");
for (let numero = inicioContagem; numero >= 0; numero--) {
	console.log(numero);
}
