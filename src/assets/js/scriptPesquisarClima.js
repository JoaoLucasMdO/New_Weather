apiKey = "5a6dbc367b74700ff55f22a655c45ddb";
tempElement = document.querySelector("#temperatura");
climaIconElement = document.querySelector("#clima-icon");
dadosTemp = document.querySelector(".dadosTemperatura")
dadosLog = document.querySelector(".dadosLogradouro")

document.querySelector("#btnVerificarClima").addEventListener("click", async (e) => {
    e.preventDefault();
    let cidade = document.querySelector("input[name='pesquisarCidade']").value
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
    let tempo = data.weather[0].description;
    let pressao = data.main.pressure;
    document.querySelector('#temperatura').innerHTML = `Temperatura: ${temperatura} º`
    document.querySelector('#temperaturaMinMax').innerHTML = `Max: ${temperaturaMax} º / Mín: ${temperaturaMin} º`
    document.querySelector('#umidade').innerHTML = `Umidade: ${umidade} %`
    document.querySelector('#pressao').innerHTML = `Pressão: ${pressao} mb`
    document.querySelector('#vento').innerHTML = `Vento: ${vento} km/h`
    document.querySelector('#tempo').innerHTML = `Tempo: ${tempo}`;
});

