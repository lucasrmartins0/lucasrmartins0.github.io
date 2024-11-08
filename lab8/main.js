//1
const passarP = document.querySelector('.passar');
const textoOriginal = passarP.textContent;

function mudaTexto() {
    passarP.textContent = 'Obrigado por passares';
}

function voltaTexto() {
    passarP.textContent = textoOriginal;
}

passarP.addEventListener('mouseover', mudaTexto);
passarP.addEventListener('mouseout', voltaTexto);


//2
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        document.getElementById('texto').style.color = color;
    } )
} )

//3

const campo_texto = document.querySelector('input#escrever');
let random = 0;

function muda_aleatorio () {
    random++;
    if (random % 4 === 0) campo_texto.style.backgroundColor = 'purple';
    if (random % 4 === 1) campo_texto.style.backgroundColor = 'lightblue';
    if (random % 4 === 2) campo_texto.style.backgroundColor = 'red';
    if (random % 4 === 3) campo_texto.style.backgroundColor = 'yellow';
}

campo_texto.addEventListener('keyup', muda_aleatorio);


//4
//----------INICIAL----------
// const inputCor = document.getElementById('cor');
// const submitButton = document.getElementById('submitbtn');

// submitButton.addEventListener('click', function() {
//     const color = inputCor.value.trim();
//     document.body.style.backgroundColor = color;
// });
//---------OUTRA  MANEIRA DE FAZER--------
// const selectCor = document.getElementById('cor');
// selectCor.addEventListener('change', () => {
//     const selectedCor = selectCor.value;
//     document.body.style.backgroundColor = selectedCor
// })
document.querySelector('select').onchange = function() {
    // Altera o background color do corpo da página para o valor do select
    document.querySelector('body').style.backgroundColor = this.value;
};

//5

let counter = 0;
const botaomais = document.getElementById('incrementar');
const botaomenos = document.getElementById('decrementar');
const elementoContador = document.getElementById('contador');

const incrementarBtn = () => {
    counter++;
    elementoContador.textContent = counter;
};

const decrementarBtn = () => {
    counter--;
    elementoContador.textContent = counter;
};

botaomais.addEventListener('click', incrementarBtn);
botaomenos.addEventListener('click', decrementarBtn);

//6
// function showMensagem() {
//     const nome = document.getElementById("nomee").value;
//     const idade = document.getElementById("idadee").value;
    
//     const mensagem = `Yo, ${nome} tens ${idade} anus!`;
    
//     document.getElementById("mensagem").textContent = mensagem;
// }

// document.getElementById("BotaoSubmeter").addEventListener("click", showMensagem);

document.querySelector('#formulario').onsubmit = (e) => {
    // Não deixa F5
    e.preventDefault();

    const nome = document.querySelector('#nomee').value;
    const idade = document.querySelector('#idadee').value;

    document.querySelector('#mensagem').textContent = `Yo, ${nome} tens ${idade} anus!`;
};


//7
// const contadorDisplay = document.getElementById("contador7");

// let counter2 = 0;

// function incrementarAutomatico() {
//     counter2++; 
//     contadorDisplay.textContent = counter2;
// }

// setInterval(incrementarAutomatico, 1000);
const contadorDisplay = document.getElementById("contador7");

    let counter2 = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

    contadorDisplay.textContent = counter2;

    function incrementarAutomatico() {
        counter2++; 
        contadorDisplay.textContent = counter2;

        localStorage.setItem('counter', counter2);
    }

    setInterval(incrementarAutomatico, 1000);



