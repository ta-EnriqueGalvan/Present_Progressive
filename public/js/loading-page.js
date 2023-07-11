var textoCompleto = "Present Progressive.";
var textoEscrito = "";
var index = 0;

$(document).ready(function() {
    //Cuando pasen 6 segundos desde que el documento a cargado, el botón de traslación de la página de carga aparecerá
    setTimeout(function() {
        $('a.link-underline').removeClass('hide');
        $('a.link-underline').addClass('show');
    }, 6000); // 5000 milisegundos = 5 segundos
    
    //Cuando se de clic en el botón de traslación de la página de carga, esta desaparecerá para entonces mostrar el div de Introducción 
    document.querySelector('a.link-underline').addEventListener('click', function () {
        //Se desaparece
        $(document.querySelector('.loading-page')).fadeOut();
        //Se ejecuta la escritura automática del texto del div de Introducción
        Presentacion();
    });
    
    //Se comienza la escritura del texto de la página de carga
    comenzarEscritura();
});

function escribirTexto() {
    textoEscrito += textoCompleto[index];
    document.querySelector(".write-text").textContent = textoEscrito;
    index++;

    if (index === textoCompleto.length) {
        clearInterval(intervalo);
    }

}

function comenzarEscritura() {
    setTimeout(function() {
        intervalo = setInterval(escribirTexto, 100); // 100 milisegundos (ajusta según tu preferencia)
    }, 4000); // 4000 milisegundos = 4 segundos
}
