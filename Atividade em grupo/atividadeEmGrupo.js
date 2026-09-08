let menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");

while (menu !== "sair") {

if (menu === "Novo salário") { 

let salario = Number(prompt("digite seu salário: "));
let novosalario = 0;

if (Number.isNaN(salario)) {
    alert("Por favor, digite um número válido para o salário.");
}
else if (salario <= 350) {
    novosalario = salario + (salario * 0.15);
} else if (salario <= 600) {
    novosalario = salario + (salario * 0.10);
} else {
    novosalario = salario + (salario * 0.05);
}

alert("O novo salário é: " + novosalario.toFixed(2));
    
}

////////////////////////////////////////////////////////////////////////////////////////////

else if (menu === "férias") { 
  const salario = Number(prompt("Digite o salário do funcionário:"));
  const ferias = salario * 1.5;

  console.log("\n=== CALCULO DE FERIAS ===");
  console.log(`salario: R$ ${salario.toFixed(2)}`);
  console.log(`acrescimo (1/2 do salario): R$ ${(salario / 2).toFixed(2)}`);
  console.log(`ferias: R$ ${ferias.toFixed(2)}`);

alert(`O valor das férias do funcionário é: R$ ${ferias.toFixed(2)}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

}
else if (menu === "décimo terceiro") {
    let salario = Number(prompt("Digite o salário: "));
    let meses = Number(prompt("Digite os meses trabalhados: "));


    let decimoTerceiro = (salario * meses) / 12;

    alert("O valor do décimo terceiro é: R$ " + decimoTerceiro.toFixed(2));
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

else if (menu === "sair") { console.log("Saindo do programa...")
    alert("Saindo do programa...")
}

else {
    console.log("Opção inválida!");
    alert("Opção inválida! Por favor, escolha uma opção válida.");
}
menu = prompt("Menu de opções: Novo salário, férias, décimo terceiro, sair");
}