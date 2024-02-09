// Ejemplo básico de index.js

// Espera a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
    console.log("¡Hola desde index.js!");

    // Ejemplo: Cambiar el contenido de un elemento HTML con el id "miElemento"
    var miElemento = document.getElementById("miElemento");
    if (miElemento) {
        miElemento.innerHTML = "¡Hola, mundo!";
    }
});
