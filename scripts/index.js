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


var moreButton = document.getElementById("More_button")
var apearing_options_menu_more = document.getElementById("apearing_options_menu_more")

moreButton.addEventListener("click", function(){
    if (apearing_options_menu_more.style.display === "none"){
        apearing_options_menu_more.style.display = "flex"
    }else{
        apearing_options_menu_more.style.display = "none"
    }
})