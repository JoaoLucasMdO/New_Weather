apiKey = "5a6dbc367b74700ff55f22a655c45ddb";
tempElement = document.querySelector("#temperatura");
climaIconElement = document.querySelector("#clima-icon");
dadosTemp = document.querySelector(".dadosTemperatura")
dadosLog = document.querySelector(".dadosLogradouro")

async function oi() {
  let cidade = document.querySelector("input[name='s']").value;
    const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiClimaURL)
    const data = await res.json()
    if (data.cod === "404"){
        alert("Cidade Inválida")
        return
    }
    const title = cidade;
    document.querySelector("#nomeCidade").innerHTML = title[0].toUpperCase() + title.substring(1);;
    let temperatura = parseFloat(data.main.temp);
    let temperaturaMin = parseFloat(data.main.temp_min);
    let temperaturaMax = parseFloat(data.main.temp_max);
    let umidade = parseFloat(data.main.humidity);
    let vento = parseFloat(data.wind.speed);
    //let tempo = data.weather[0].description;
    let pressao = data.main.pressure;
    let sensacaoTermica = data.main.feels_like;
    // Funções para nascer e descer do sol
    let timestampSunrise = data.main.sunrise;
    let timestampSunset = data.main.sunset;
    // Converter timestamps para objetos Date
    let dataSunrise = new Date(timestampSunrise * 1000);
    let dataSunset = new Date(timestampSunset * 1000);
    // Extrair horas, minutos e segundos
    let horaSunrise = dataSunrise.toISOString().substr(11, 8);
    let horaSunset = dataSunset.toISOString().substr(11, 8);

    document.querySelector('#temperatura').innerHTML = `Temperatura: ${temperatura} º`
    document.querySelector('#temperaturaMinMax').innerHTML = `Max: ${temperaturaMax} º / Mín: ${temperaturaMin} º`
    document.querySelector('#umidade').innerHTML = `Umidade: ${umidade} %`
    document.querySelector('#pressao').innerHTML = `Pressão: ${pressao} mb`
    document.querySelector('#vento').innerHTML = `Vento: ${vento} km/h`
    document.querySelector('#tempo').innerHTML = `Tempo: ${tempo}`;
    document.querySelector('#sensacaoTermica').innerHTML = `Tempo: ${sensacaoTermica}`;
    document.querySelector('#sunrise').innerHTML = `Nascer do sol: ${horaSunrise}`;
    document.querySelector('#sunset').innerHTML = `Descer do sol: ${horaSunset}`;
};

