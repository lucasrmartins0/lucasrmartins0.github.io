function mudarCor(cor) {
    document.querySelector('#texto').style.color = cor;
}

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
