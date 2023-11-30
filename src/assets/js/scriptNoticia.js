async function noticias(){
    apikey = "apikey=206e9b30ae74431b8a57bd14c840e2d5"
    ano = 'from=2023'
    pesquisa = 'q='
    organizar = 'sortBy=popularity'
    pais = 'country=br'
    
    const noticiaapi = `https://newsapi.org/v2/top-headlines?${pais}&${pesquisa}&${ano}&${organizar}&${apikey}`;
    const noticia = await fetch(noticiaapi)
    const data = await noticia.json() 
    console.log(data);

}

