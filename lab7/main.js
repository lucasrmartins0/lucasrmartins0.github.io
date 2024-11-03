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

function mudarCor(cor) {
    document.querySelector('#texto').style.color = cor;
}


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

const inputCor = document.getElementById('cor');
const submitButton = document.getElementById('submitbtn');

submitButton.addEventListener('click', function() {
    const color = inputCor.value.trim();
    document.body.style.backgroundColor = color;
});



//5

let counter = 0;
const botaomais = document.getElementById('incrementar');
const botaomenos = document.getElementById('decrementar')
const elementoContador = document.getElementById('contador');

function incrementarBtn() {
    counter++;
    elementoContador.textContent = counter; 
}
function decrementarBtn(){
    counter--;
    elementoContador.textContent = counter;
}

botaomais.addEventListener('click', incrementarBtn);
botaomenos.addEventListener('click', decrementarBtn)

