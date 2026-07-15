var main_container_page_comunidad = document.getElementById("sections_1");

document.addEventListener("DOMContentLoaded", function() {
    main_container_page_comunidad.append(document.createElement("b").textContent = "append works")
})

var main_content_tittles = {
        tittle_1: "estado de matrimonio",
        tittle_2: "estado de viudas",
        tittle_3: "estado de hombres",
        tittle_4: "estado de jovenes"
    }


var main_content_content ={
        content_1: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
        content_2: "Prow"
}

for (const property in main_content_tittles ) {
    var div_creator = document.createElement("div")
    div_creator.classList.add('comunidad_estados')
    var tittle_text = document.createElement("h3")
    tittle_text.innerText = `${main_content_tittles[property]}`
    div_creator.append(tittle_text) 
    main_container_page_comunidad.append(div_creator)
    console.log(`${property}: ${main_content_tittles[property]}`);
}

// for (const property in main_content_tittles ) {
//   main_
// }

console.log("Se ha cargado la página de comunidad correctamente."+ main_content_tittles.tittle_1);