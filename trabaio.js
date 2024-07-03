

anoes = [];

function cadastrarAnao(etnia, tamanho, origem, personalidade, preco, genero){
    const anao = {
        etnia: etnia,
        tamanho: tamanho,
        origem: origem,
        personalidade: personalidade,
        preco: preco,
        genero : genero,
    }
    
    anoes.push(anao);

    // PERSISTINDO OS DADOS:
    const fs = require('fs');

    anoesJSON = JSON.stringify(anoes);
    fs.writeFileSync("anoes.json", anoesJSON);
    console.log("Dados foram adicionados com sucesso!");
}

cadastrarAnao("Branco", 50, "europeia", "extrovertido", 500.0, "masculino");
cadastrarAnao("Rosa", 30, "Asiatica", "introvertido", 500.0, "imãprhoditte");
cadastrarAnao("Verde", 50, "Americana", "Ambivertido", 500.0, "Feminino");
cadastrarAnao("Preto", 50, "Latindo-Americano", "Pervertido", 500.0, "Gay");
cadastrarAnao("Estrosgoscopicos", 50, "Oceanico", "Invertido", 500.0, "Gaymer");
cadastrarAnao("Vermelho", 50, "Marciano", "Pobrevertido", 50000000.0, "Bombado");


 