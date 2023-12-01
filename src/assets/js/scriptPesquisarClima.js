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
    let temperatura = parseFloat(data.main.temp);
    let temperaturaMin = parseFloat(data.main.temp_min);
    let temperaturaMax = parseFloat(data.main.temp_max);
    let umidade = parseFloat(data.main.humidity);
    let vento = parseFloat(data.wind.speed);
    let pressao = data.main.pressure;
    let sensacaoTermica = data.main.feels_like;


    document.querySelector('#temperatura').innerHTML = `+${Math.floor(temperatura)}º`
    document.querySelector('#temperaturaMinMax').innerHTML = `Max: ${temperaturaMax} º / Mín: ${temperaturaMin} º`
    document.querySelector('#umidade').innerHTML = `${umidade} %`
    document.querySelector('#pressao').innerHTML = `${pressao} mb`
    document.querySelector('#vento').innerHTML = `${vento} km/h`
    document.querySelector('#sensacaoTermica').innerHTML = `${sensacaoTermica}`;
};

