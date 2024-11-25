//----------------------(((((((API)))))))---------------

let produtosOriginais = [];

document.addEventListener("DOMContentLoaded", () => {
    const selectCategorias = document.getElementById('categorias-filtros');
    const inputPesquisa = document.getElementById('pesquisar-produto');
    const ordenarPreco = document.getElementById('ordenar-por-preco');
    const butBtn = document.getElementById("comprar-btn");

    getCategorias()
        .then(categorias => {
            loadCategorias(categorias);
        })
        .catch(err => {
            console.error("Erro ao obter categorias:", err);
        });

    getProdutos()
        .then(produtos => {
            produtosOriginais = [...produtos];
            loadProdutos(produtos);
        })
        .catch(err => {
            console.error("Erro ao obter produtos:", err);
            document.getElementById('produtos').innerHTML +=
                "<p>Erro ao carregar produtos. Por favor, tente novamente mais tarde.</p>";
        });

    selectCategorias.addEventListener('change', () => {
        const categoriaSelecionada = selectCategorias.value;
        filtrarProdutosPorCategoria(categoriaSelecionada);
    });

    ordenarPreco.addEventListener('change', () => {
        const ordenar = ordenarPreco.value;
        ordenarProdutosPorPreco(ordenar);
    });

    inputPesquisa.addEventListener('input', () => {
        const pesquisa = inputPesquisa.value.trim().toLowerCase();
        pesquisarProdutos(pesquisa);
    });

    butBtn.addEventListener("click", finalizarCompra);

    renderizarCesto();
});

function ordenarProdutosPorPreco(ordenar) {
    let produtos;

    if (ordenar === "none") {
        produtos = produtosOriginais;
    } else {
        produtos = [...produtosOriginais];
        produtos.sort((a, b) => {
            return ordenar === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }

    loadProdutos(produtos);
}

function pesquisarProdutos(pesquisa) {
    if (!pesquisa) {
        loadProdutos(produtosOriginais);
    } else {
        const produtosFiltrados = produtosOriginais.filter(produto =>
            produto.title.toLowerCase().includes(pesquisa)
        );
        loadProdutos(produtosFiltrados);
    }
}

async function getCategorias() {
    const url = "https://deisishop.pythonanywhere.com/categories/";
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const categorias = await resposta.json();
        return categorias.map(c => c.trim());
    } catch (erro) {
        console.error("Erro ao obter categorias da API:", erro);
        throw erro;
    }
}

function loadCategorias(categorias) {
    const selectCategorias = document.getElementById('categorias-filtros');
    selectCategorias.innerHTML = '';

    const opcaoTodas = document.createElement('option');
    opcaoTodas.value = '';
    opcaoTodas.textContent = "Todas as categorias";
    selectCategorias.appendChild(opcaoTodas);

    categorias.forEach(categoria => {
        const opcao = document.createElement('option');
        opcao.value = categoria.trim();
        opcao.textContent = categoria.trim();
        selectCategorias.appendChild(opcao);
    });
}

async function getProdutos() {
    const url = "https://deisishop.pythonanywhere.com/products/";
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const produtos = await resposta.json();
        return produtos.map(produto => ({
            ...produto,
            category: produto.category.trim()
        }));
    } catch (erro) {
        console.error("Erro ao obter os produtos da API:", erro);
        throw erro;
    }
}

function loadProdutos(produtos) {
    const listaProdutos = document.getElementById('produtos');
    listaProdutos.innerHTML = '<h3>Selecione os seus produtos</h3>';

    if (!produtos || produtos.length === 0) {
        listaProdutos.innerHTML += "<p>Nenhum produto encontrado.</p>";
        return;
    }

    produtos.forEach(produto => {
        const artigo = criarProduto(produto);
        listaProdutos.appendChild(artigo);
    });
}

function filtrarProdutosPorCategoria(categoriaSelecionada) {
    let produtosFiltrados;

    if (categoriaSelecionada === "") {
        produtosFiltrados = produtosOriginais;
    } else {
        produtosFiltrados = produtosOriginais.filter(produto =>
            produto.category === categoriaSelecionada.trim()
        );
    }

    loadProdutos(produtosFiltrados);
}

function criarProduto(produto) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto');

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const titulo = document.createElement('h3');
    titulo.textContent = produto.title;

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    const preco = document.createElement('p');
    preco.innerHTML = `<strong>Preço:</strong> €${produto.price}`;

    const botao = document.createElement('button');
    botao.textContent = " + Adicionar ao Cesto";
    botao.onclick = () => addCesto(produto);

    artigo.appendChild(imagem);
    artigo.appendChild(titulo);
    artigo.appendChild(preco);
    artigo.appendChild(descricao);
    artigo.appendChild(botao);

    return artigo;
}

function addCesto(produto) {
    const cesto = JSON.parse(localStorage.getItem('cesto')) || [];
    cesto.push(produto);
    localStorage.setItem('cesto', JSON.stringify(cesto));
    renderizarCesto();
}

function renderizarCesto() {
    const listaCesto = document.getElementById('lista-cesto');
    listaCesto.innerHTML = '';
    let precoTotal = 0;

    const cesto = JSON.parse(localStorage.getItem('cesto')) || [];
    cesto.forEach((produto, index) => {
        const itemCesto = document.createElement('li');

        itemCesto.classList.add('item-cesto');


        // Imagem do produto
        const imagemProduto = document.createElement('img');
        imagemProduto.src = produto.image;
        imagemProduto.alt = produto.title;

        const textoProduto = document.createElement('span');
        textoProduto.textContent = `${produto.title} - €${produto.price}`;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn-remover');
        removeBtn.textContent = "Remover";
        removeBtn.onclick = () => removerDoCesto(index);

        itemCesto.appendChild(imagemProduto);
        itemCesto.appendChild(textoProduto);
        itemCesto.appendChild(removeBtn);

        listaCesto.appendChild(itemCesto);

        precoTotal += produto.price;
    });

    const precoFinal = document.getElementById('preço-final');
    precoFinal.textContent = `Preço Total: €${precoTotal.toFixed(2)}`;
}

function removerDoCesto(index) {
    const cesto = JSON.parse(localStorage.getItem('cesto')) || [];
    cesto.splice(index, 1);
    localStorage.setItem('cesto', JSON.stringify(cesto));
    renderizarCesto();
}

async function finalizarCompra() {
    const estudante = document.getElementById("estudante DEISI").checked;
    const cupao = document.getElementById("cupao").value.trim();
    const cesto = JSON.parse(localStorage.getItem('cesto')) || [];
    const produtosIds = cesto.map(produto => produto.id);

    if (produtosIds.length === 0) {
        alert("O cesto está vazio. Adicione produtos antes de finalizar a compra.");
        return;
    }

    const corpoPedido = {
        products: produtosIds,
        student: estudante,
        coupon: cupao
    };

    try {
        const resposta = await fetch("https://deisishop.pythonanywhere.com/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpoPedido)
        });

        if (!resposta.ok) {
            const erro = await resposta.json();
            throw new Error(erro.error || "Erro ao processar a compra.");
        }

        const dados = await resposta.json();
        document.getElementById('valor-a-comprar').textContent =
            `Compra realizada com sucesso! Total a pagar: €${dados.totalCost}`;
    } catch (erro) {
        console.error("Erro na compra:", erro.message);
        document.getElementById('valor-a-comprar').textContent =
            `Erro: ${erro.message}`;
    }
}
