/**
 * Vriable group for all needed context.
 */


document.addEventListener("DOMContentLoaded", function() {

    var imagenes = document.querySelectorAll(".carousel-img");
    var indiceActual = 0;
    
    function cambiarImagen() {
        imagenes[indiceActual].classList.remove("active");
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenes[indiceActual].classList.add("active");
    }
    
    
    setInterval(cambiarImagen, 4000);
});

document.addEventListener("DOMContentLoaded", function() {
    
    
    function tandemplay(){
        var tandemplaying = false;
        const tandem = new Audio("assets/videoplayback.mp3")
        tandem.play();
        console.log(tandemplaying);

    }
    
    if (tandemplaying === false){
        tandemplay();
        console.log(tandemplaying);
        var tandemplaying = true;
    }

});