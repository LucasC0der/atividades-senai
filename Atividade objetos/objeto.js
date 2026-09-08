const pedidos = [
	{
		nome: "X-Burger",
		preco: 18.5,
		quantidade: 2
	},
	{
		nome: "Batata frita",
		preco: 12,
		quantidade: 1
	},
	{
		nome: "Refrigerante",
		preco: 7.5,
		quantidade: 3
	},
	{
		nome: "Milk-shake",
		preco: 15,
		quantidade: 2
	}
];

let valorTotalPedido = 0;
let itemMaiorValor = null;

for (const item of pedidos) {
	const valorTotalItem = item.preco * item.quantidade;
	valorTotalPedido += valorTotalItem;

	console.log(`${item.nome} | Quantidade: ${item.quantidade} | Valor total: R$ ${valorTotalItem.toFixed(2)}`);

	if (itemMaiorValor === null || valorTotalItem > itemMaiorValor.valorTotal) {
		itemMaiorValor = {
			nome: item.nome,
			valorTotal: valorTotalItem
		};
	}
}

console.log(`Valor total do pedido: R$ ${valorTotalPedido.toFixed(2)}`);
console.log(`Item com maior valor total: ${itemMaiorValor.nome} (R$ ${itemMaiorValor.valorTotal.toFixed(2)})`);
