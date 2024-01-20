let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

function intentoDeUsuario() {
    alert('Has hecho click desde la funcion');
}

function preguntaCiudadBrasil() {
    let ciudadBrasil = prompt('¿Nombre de una ciudad de Brasil?');
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);
}

function alertaJS() {
    alert(`Yo amo JS`);
}

function suma() {
    let numero1 = parseInt(prompt('Ingrese un número'));
    let numero2 = parseInt(prompt('Ingrese otro número'));
    suma2 = numero1 + numero2;
    alert(`la suma de ambos números es: ${suma2}`);
}