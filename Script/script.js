
const key = "e2fd65d8aa565597b8f83103747b964f";

document.addEventListener('DOMContentLoaded', function() {
   
    const cidadeInicial = "São paulo";
    buscarCidade(cidadeInicial);
});

function cliqueiBotao() {

    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}

async function buscarCidade(cidade) {

const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
console.log(dados);
putDadosTela(dados);
   
}

function putDadosTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "Cº";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").style.display = 'block';
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png";
}   


