import { produtos } from './produtos.js';

const listaProdutos = document.querySelector("#produtos");

document.addEventListener('DOMContentLoaded', () => {

    produtos.forEach(produto => {

        const article = document.createElement('article');
        article.classList.add('produto'); 

        const titulo = document.createElement('h3');
        titulo.textContent = produto.title;

        const imagem = document.createElement('img');
        imagem.src = produto.image;
        imagem.alt = produto.title;

        const descricao = document.createElement('p');
        descricao.textContent = produto.description;

        const preco = document.createElement('p');
        preco.textContent = `Preço: €${produto.price.toFixed(2)}`;

        article.append(imagem, titulo, descricao, preco);

        listaProdutos.append(article);
    });
}); 
