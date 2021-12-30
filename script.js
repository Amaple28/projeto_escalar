//Regras de negócio

//JSON com todos os produtos
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
    { nome: "Planos", preco: 0, quantidade: 0 },
    { nome: "Mão de obra", preco: 0, quantidade: 1 },
];

//Função para finalizar orçamento
function finalizarOrcamento() {
    let quantidades = document.querySelectorAll(".input-quantidade");
    let precos = document.querySelectorAll(".input-preco");
    let inputTotalInvestimento = document.querySelector(
        ".input-total-investimento"
    );
    let totalInvestimento = 0;
    let inputTotalMensalidade = document.querySelector(
        ".input-total-mensalidade"
    );
    let planos = document.querySelectorAll(".form-check-input");
    let quantidadePlanos = document.querySelector(".input-quantidade-planos");
    produtos[15].preco = parseFloat(
        document.querySelector(".input-preco-obra").value
    );

    planos.forEach((plano) => {
        if (plano.checked) {
            produtos[14].preco = parseFloat(plano.value);
            console.log(quantidadePlanos);
            produtos[14].quantidade = parseFloat(quantidadePlanos.value);
        }
    });

    for (let i = 0; i < quantidades.length; i++) {
        produtos[i].quantidade =
            quantidades[i].value != "" ? parseFloat(quantidades[i].value) : 0;
        produtos[i].preco = precos[i].value != "" ? parseFloat(precos[i].value) : 0;
    }

    console.log(produtos);

    produtos.forEach((produto) => {
        if (produto.nome != "Planos") {
            totalInvestimento += produto.quantidade * produto.preco;
        } else {
            totalInvestimento += produto.preco;
        }
    });
    inputTotalInvestimento.value = totalInvestimento;
    inputTotalMensalidade.value = produtos[14].preco * produtos[14].quantidade;
}

//Funções para alterar valores em tempo real
function liveChange(name) {
    document.getElementById(name + "-total").value =
        parseFloat(document.getElementById(name + "-preco").value) *
        parseFloat(document.getElementById(name + "-quantidade").value);
}

function setPlanoSelecionado(value) {
    document.getElementById("input-quantidade-planos").name = value;
}

function liveChangePlanos(value) {
    document.getElementById("input-total-planos").value =
        parseFloat(document.getElementById("gridRadios" + value).value) *
        parseFloat(document.getElementById("input-quantidade-planos").value);
}

function formaDePagamento(value) {
    let bronze = document.getElementById("gridRadios1");
    let prata = document.getElementById("gridRadios2");
    let ouro = document.getElementById("gridRadios3");
    let diamante = document.getElementById("gridRadios4");

    let bronzeLabel = document.getElementById("gridRadios1-label");
    let prataLabel = document.getElementById("gridRadios2-label");
    let ouroLabel = document.getElementById("gridRadios3-label");
    let diamanteLabel = document.getElementById("gridRadios4-label");

    console.log(bronze);
    console.log(bronzeLabel);

    if (value == "Anual") {
        bronze.value = 15.9;
        prata.value = 19.6;
        ouro.value = 23.01;
        diamante.value = 26.67;

        bronzeLabel.innerHTML = "Plano Bronze | R$ 15,9";
        prataLabel.innerHTML = "Plano Prata | R$ 19,6";
        ouroLabel.innerHTML = "Plano Ouro | R$ 23,01";
        diamanteLabel.innerHTML = "Plano Diamante | R$ 26,67";
    } else if (value == "Mensal") {
        bronze.value = 39;
        prata.value = 49;
        ouro.value = 59;
        diamante.value = 69;

        bronzeLabel.innerHTML = "Plano Bronze | R$ 39,00";
        prataLabel.innerHTML = "Plano Prata | R$ 49,00";
        ouroLabel.innerHTML = "Plano Ouro | R$ 59,00";
        diamanteLabel.innerHTML = "Plano Diamante | R$ 69,00";
    }
}