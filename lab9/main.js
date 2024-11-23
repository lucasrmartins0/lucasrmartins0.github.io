const listaProdutos = document.querySelector("#produtos");
const listaCesto = document.querySelector("#lista-cesto");
let produtosNoCesto = JSON.parse(localStorage.getItem("cesto")) || []; 

document.addEventListener('DOMContentLoaded', () => {

    produtos.forEach(produto => {
        const article = document.createElement('article');
        article.classList.add('produto');

        const titulo = document.createElement('h3');
        titulo.textContent = produto.title;

        const imagem = document.createElement('img');
        imagem.src = produto.image;
        imagem.alt = produto.title;

        const preco = document.createElement('p');
        preco.textContent = `Preço: €${produto.price.toFixed(2)}`;

        const descricao = document.createElement('p');
        descricao.textContent = produto.description;

        const button = document.createElement('button');
        button.textContent = "+ Adicionar ao Cesto";
        button.addEventListener('click', () => adicionarAoCesto(produto));

        article.append(titulo, imagem, descricao, preco, button);
        listaProdutos.append(article);
    });

    atualizaCesto();

    function adicionarAoCesto(produto) {
        const produtoCompleto = {
            id: produto.id,
            title: produto.title,
            image: produto.image,
            description: produto.description,
            price: produto.price
        };

        produtosNoCesto.push(produtoCompleto);
        
        localStorage.setItem("cesto", JSON.stringify(produtosNoCesto));
        
        atualizaCesto();
    }

    function atualizaCesto() {
        listaCesto.innerHTML = "";

        let custoTotal = 0;

        produtosNoCesto.forEach((produto, index) => {
            const li = document.createElement('li');
            li.classList.add('produto');

            const titulo = document.createElement('h3');
            titulo.textContent = produto.title;

            const imagem = document.createElement('img');
            imagem.src = produto.image;
            imagem.alt = produto.title;

            const descricao = document.createElement('p');
            descricao.textContent = produto.description;

            const preco = document.createElement('p');
            preco.textContent = `Preço: €${produto.price.toFixed(2)}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remover do Cesto";
            removeButton.addEventListener('click', () => removerDoCesto(index));

            li.append(titulo, imagem, descricao, preco, removeButton);
            listaCesto.append(li);

            custoTotal += produto.price;
        });

        const custoTotalElement = document.querySelector("#cesto h3");
        custoTotalElement.textContent = `Custo Total: €${custoTotal.toFixed(2)}`;
    }

    function removerDoCesto(index) {

        produtosNoCesto.splice(index, 1);

        localStorage.setItem("cesto", JSON.stringify(produtosNoCesto));

        atualizaCesto();
    }
});
