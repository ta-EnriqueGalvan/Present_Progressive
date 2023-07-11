document.querySelector('.hide-introduction').addEventListener('click', function () {
    //Se desvanecerá el div de introducción
    $(document.querySelector('.content-beggining')).fadeOut();
    //Se agregará la clase de la página 1 para añadir fondo y posteriormente aparezcan los elementos
    //$('.content-page-1').removeClass('hide');
    //$('.content-page-1').addClass('show');
    $('body').addClass('body-page-one');
});


var textos = ["Hello!", ", I'm glad you're here. ", "Let me introduce myself."];
var elementos = Array.from(document.getElementsByClassName("txt-appear"));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function escribirPresentacion(elemento, texto) {
    var mensajeEscrito = "";
    for (var i = 0; i < texto.length; i++) {
        mensajeEscrito += texto[i];
        elementos[elemento].textContent = mensajeEscrito;
        await delay(100); // 100 milisegundos (ajusta según tu preferencia)
    }
}

async function imprimirTextosSecuencialmente() {
    for (var i = 0; i < elementos.length; i++) {
        await escribirPresentacion(i, textos[i]);
    }
}

function Presentacion() {
    //Se comenzará a escribir el texto automático
    setTimeout(function() {
        imprimirTextosSecuencialmente();
    }, 2000); // 2000 milisegundos = 2 segundos
    
    //Se mostrará el div con el contenido
    setTimeout(function() {
        document.querySelector('.content-beggining > div').classList.add("appear");
    }, 8000); // 2000 milisegundos = 2 segundos
}
//Comentar si se llamará desde el Loading Page
//Presentacion();