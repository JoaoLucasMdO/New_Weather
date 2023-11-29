async function noticias(){
    apikey = "pub_246657934d0e54867d40fee9cf274d6809088"
    
    const noticiaapi = `https://newsdata.io/api/1/news?apikey=${apikey}&q=agronegocio&country=br`
    const noticia = await fetch(noticiaapi)
    const data = await noticia.json() 
    link1 = data.results[0].link
    link2 = data.results[1].link
    img1 = data.results[0].image_url
    img2 = data.results[1].image_url

    document.querySelector("#not1").innerHTML = data.results[0].title
    document.querySelector("#desc1").innerHTML = data.results[0].description
    document.querySelector("#not2").innerHTML = data.results[1].title
    document.querySelector("#desc2").innerHTML = data.results[1].description
    
    if(img1 == null){
        document.querySelector("#img1").setAttribute("src", "../artigos-joao-l/img/semimg.jpg")
    }
    else{
        document.querySelector("#img1").setAttribute("src", img1 )
    }

    if(img2 == null){
        document.querySelector("#img2").setAttribute("src", "../artigos-joao-l/img/semimg.jpg")
    }
    else{
        document.querySelector("#img2").setAttribute("src", img2)
    }


    document.querySelector("#link1").setAttribute("href", link1)
    document.querySelector("#link2").setAttribute("href", link2)

    
}

