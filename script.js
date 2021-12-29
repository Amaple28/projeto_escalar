//carrega pacote dos gráficos basicos
google.charts.load('current', { 'packages': ['corechart'] });

//definimos a funcao de desenhar como callback do carregamento do pacote
google.charts.setOnLoadCallback(desenha_grafico);

//funcao que configura e desenha grafico
function desenha_grafico() {

    //cria dataTable com os dados
    var dados = new google.visualization.DataTable();
    dados.addColumn('string', 'Escolaridade');
    dados.addColumn('number', 'Anos');
    dados.addRows([
        ['Primário', 9],
        ['Ensino Médio', 3],
        ['Faculdade', 4],
        ['Mestrado', 2],
        ['Doutorado', 4]
    ]);

    var altura = 250;

    var largura = 600;
    if (document.getElementById('grafico_div').offsetWidth < 600) {
        largura = document.getElementById('grafico_div').offsetWidth;
    }

    //configurações do grafico
    var opcoes = {
        'title': 'Quantidade de anos em cada período escolar',
        'width': largura,
        'height': altura
    };

    //define grafico como gráfico de pizza a ser incluido no elemento de id grafico_div
    var grafico = new google.visualization.ColumnChart(document.getElementById('grafico_div'));

    //desenha gráfico com dados e configuraçoes definidas
    grafico.draw(dados, opcoes);
}

window.addEventListener('resize', desenha_grafico);