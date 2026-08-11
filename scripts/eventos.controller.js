/**
 * ================================================================
 *  CONTROLADOR DE EVENTOS (capa "controlador", usa EventsService)
 * ================================================================
 * Único archivo que toca el DOM de la vista de eventos: pinta la
 * lista, atiende el formulario y los botones de eliminar. No conoce
 * cómo se validan o se guardan los datos, delega todo en EventsService.
 */

var eventsListSection = document.getElementById("events_list_section");
var eventForm = document.getElementById("event_form");

function renderEventos() {
    var eventos = EventsService.listSorted();
    eventsListSection.innerHTML = "";

    if (eventos.length === 0) {
        var vacio = document.createElement("p");
        vacio.classList.add("eventos-vacio");
        vacio.innerText = "No hay eventos programados por el momento.";
        eventsListSection.append(vacio);
        return;
    }

    eventos.forEach(function(evento) {
        var card = document.createElement("div");
        card.classList.add("evento-card");

        var titulo = document.createElement("h3");
        var fechaTexto = evento.fecha + (evento.hora ? " · " + evento.hora : "");
        titulo.innerText = fechaTexto;

        var eliminarBtn = document.createElement("button");
        eliminarBtn.classList.add("evento-eliminar");
        eliminarBtn.type = "button";
        eliminarBtn.innerText = "Eliminar";
        eliminarBtn.addEventListener("click", function() {
            EventsService.deleteEvent(evento.id);
            renderEventos();
        });
        titulo.append(eliminarBtn);

        var lugar = document.createElement("p");
        lugar.innerText = "Lugar: " + evento.lugar;

        var contexto = document.createElement("p");
        contexto.innerText = evento.contexto;

        card.append(titulo, lugar, contexto);
        eventsListSection.append(card);
    });
}

eventForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(eventForm);

    try {
        EventsService.createEvent({
            fecha: formData.get("fecha"),
            hora: formData.get("hora"),
            lugar: formData.get("lugar"),
            contexto: formData.get("contexto"),
            expiraCantidad: formData.get("expiraCantidad"),
            expiraUnidad: formData.get("expiraUnidad")
        });
        eventForm.reset();
        renderEventos();
    } catch (err) {
        alert(err.message);
    }
});

EventsService.purgeExpired();
renderEventos();

setInterval(function() {
    if (EventsService.purgeExpired()) {
        renderEventos();
    }
}, 60 * 1000);

var moreButton = document.getElementById("More_button")
var apearing_options_menu_more = document.getElementById("apearing_options_menu_more")

moreButton.addEventListener("click", function(){
    if (apearing_options_menu_more.style.display === "none"){
        apearing_options_menu_more.style.display = "flex"
    }else{
        apearing_options_menu_more.style.display = "none"
    }
})
