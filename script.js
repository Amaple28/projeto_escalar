// var produtos = [
//     { nome: "tv1", preco: "", quantidade: "" },
//     { nome: "tv2", preco: "", quantidade: "" },
//     { nome: "tv3", preco: "", quantidade: "" },
//     { nome: "tv4", preco: "", quantidade: "" },
//     { nome: "tv5", preco: "", quantidade: "" },
//     { nome: "tv6", preco: "", quantidade: "" },
//     { nome: "tv7", preco: "", quantidade: "" },
//     { nome: "tv8", preco: "", quantidade: "" },
//     { nome: "tv9", preco: "", quantidade: "" },
//     { nome: "tv10", preco: "", quantidade: "" },
//     { nome: "tv11", preco: "", quantidade: "" },
//     { nome: "player1", preco: "", quantidade: "" },
//     { nome: "player2", preco: "", quantidade: "" },
//     { nome: "player3", preco: "", quantidade: "" },
// ];

//Regras de negócio
var produtos = [
    { nome: "TV 32 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 40 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 43 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 49 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 50 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 55 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 58 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 65 Polegadas", preco: 0, quantidade: 0 },
    { nome: "TV 75 Polegadas", preco: 0, quantidade: 0 },
    { nome: "Monitor LED", preco: 0, quantidade: 0 },
    { nome: "Monitor video Wall", preco: 0, quantidade: 0 },
    { nome: "Player Alphasignage", preco: 0, quantidade: 0 },
    {
        nome: "Player Alphasignage Secundário",
        preco: 0,
        quantidade: 0,
    },
    { nome: "TV Box", preco: 0, quantidade: 0 },
];

function finalizarCompra() {
    let quantidades = document.querySelectorAll(".input-quantidade");
    let precos = document.querySelectorAll(".input-preco");
    let inputTotalInvestimento = document.querySelector(
        ".input-total-investimento"
    );
    console.log(quantidades);
    let totalInvestimento = 0;

    for (let i = 0; i < quantidades.length; i++) {
        console.log(produtos[i].nome);

        produtos[i].quantidade =
            quantidades[i].value != "" ? parseFloat(quantidades[i].value) : 0;
        produtos[i].preco = precos[i].value != "" ? parseFloat(precos[i].value) : 0;
    }

    produtos.forEach((produto) => {
        totalInvestimento += produto.quantidade * produto.preco;
    });

    inputTotalInvestimento.value = totalInvestimento;
}

function finalizarPlanos(value) {
    let inputTotalMensalidade = document.querySelector(
        ".input-total-mensalidade"
    );
    let inputQuantidadePlanos = document.querySelector(
        ".input-quantidade-planos"
    );

    inputTotalMensalidade.value =
        parseFloat(value) * parseFloat(inputTotalMensalidade.value);
}