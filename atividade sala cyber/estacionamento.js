const tempoGratisMin = 15;
const precoPrimeiraHora = 8;
const precoHoraDia = 4;
const precoHoraNoite = 8;
const tetoCarro = 40;
const tetoMoto = 20;

function formatarMoeda(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

while (true) {
    const opcao = prompt(
        "===== ESTACIONAMENTO =====\n" +
        "1 - Calcular valor\n" +
        "0 - Sair\n\n" +
        "Escolha:"
    );

    if (opcao === "1") calcular();
    else if (opcao === "0") break;
    else alert("Opção inválida!");
}

function calcular() {
    const tipo = prompt("1 = Carro\n2 = Moto");

    if (tipo !== "1" && tipo !== "2") {
        alert("Digite apenas 1 ou 2!");
        return;
    }

    const tipoFinal = tipo === "1" ? "carro" : "moto";

    const entradaDia = prompt("Horas de dia (06-22h)?");
    const entradaNoite = prompt("Horas de noite (22-06h)?");

    const horasDia = Number.parseFloat((entradaDia || "").replace(",", "."));
    const horasNoite = Number.parseFloat((entradaNoite || "").replace(",", "."));

    if (
        Number.isNaN(horasDia) ||
        Number.isNaN(horasNoite) ||
        horasDia < 0 ||
        horasNoite < 0 ||
        horasDia + horasNoite === 0
    ) {
        alert("Digite horas válidas!");
        return;
    }

    const valor = calcularPreco(horasDia, horasNoite, tipoFinal);

    alert(
        "===== VALOR A PAGAR =====\n" +
        "Tipo: " + tipoFinal + "\n" +
        "Horas: " + horasDia + "h de dia + " + horasNoite + "h de noite\n" +
        "TOTAL: R$ " + formatarMoeda(valor)
    );
}

function calcularPreco(horasDia, horasNoite, tipo) {
    if ((horasDia + horasNoite) * 60 <= tempoGratisMin) {
        return 0;
    }

    let dia = Math.ceil(horasDia);
    let noite = Math.ceil(horasNoite);

    let valor = precoPrimeiraHora;

    // A primeira hora já está incluída nos R$ 8
    if (dia >= 1) {
        dia--;
    } else if (noite >= 1) {
        noite--;
    }

    valor += dia * precoHoraDia;
    valor += noite * precoHoraNoite;

    const teto = tipo === "moto" ? tetoMoto : tetoCarro;

    return Math.min(valor, teto);
}


// ===== NÍVEL 5 =====

const veiculos = [
    { placa: "ABC1234", tipo: "carro", horaEntrada: 8, horaSaida: 11 },
    { placa: "XYZ9876", tipo: "moto", horaEntrada: 23, horaSaida: 2 },
    { placa: "JJJ0001", tipo: "carro", horaEntrada: 9, horaSaida: 20 }
];

function calcularValor2x1(entrada, saida, tipo) {
    if (
        typeof entrada !== "number" ||
        typeof saida !== "number" ||
        entrada < 0 || entrada > 23 ||
        saida < 0 || saida > 23
    ) {
        return 0;
    }

    const horas = (saida - entrada + 24) % 24;

    if (horas === 0) return 0;

    // Divide o tempo entre dia e noite
    let horasDia = 0;
    let horasNoite = 0;

    for (let i = 0; i < horas; i++) {
        const hora = (entrada + i) % 24;

        if (hora >= 6 && hora < 22) {
            horasDia++;
        } else {
            horasNoite++;
        }
    }

    return calcularPreco(horasDia, horasNoite, tipo);
}

function relatorio() {
    if (veiculos.length === 0) {
        console.log("Nenhum veículo registrado.");
        return;
    }

    const valores = veiculos.map(veiculo =>
        calcularValor2x1(
            veiculo.horaEntrada,
            veiculo.horaSaida,
            veiculo.tipo
        )
    );

    const faturamento = valores.reduce(
        (total, valor) => total + valor,
        0
    );

    const maior = Math.max(...valores);
    const indice = valores.indexOf(maior);

    const carros = veiculos.filter(
        veiculo => veiculo.tipo === "carro"
    ).length;

    const motos = veiculos.filter(
        veiculo => veiculo.tipo === "moto"
    ).length;

    console.log(
        "Faturamento: R$ " + formatarMoeda(faturamento)
    );

    console.log(
        "Veículo que mais pagou: " +
        veiculos[indice].placa
    );

    console.log(
        "Valor pago: R$ " + formatarMoeda(maior)
    );

    console.log("Carros: " + carros);
    console.log("Motos: " + motos);
}

relatorio();