var main_container_page_comunidad = document.getElementById("sections_1");
var subsection_sections_1 = document.createElement("div");
subsection_sections_1.classList.add('subsection_sections_1');


var main_content_tittles = {
        tittle_1: "Estado de matrimonio",
        tittle_2: "Estado de viudas",
        tittle_3: "Estado de hombres",
        tittle_4: "Estado de jovenes"
    }


var main_content_content ={
        content_1: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
}

for (const property in main_content_tittles ) {
    i = 0
    while (i < 1){
        main_container_page_comunidad.append(subsection_sections_1)
        i++
        console.log(i);
    }  
    //This creates a div for the tittle and content of the main content of the page and allows me to dinamically insert them into the main container of the page
    var div_creator = document.createElement("div")
    div_creator.classList.add('comunidad_estados')
    var tittle_text = document.createElement("h3")
    tittle_text.innerText = `${main_content_tittles[property]}`
    div_creator.append(tittle_text)
    subsection_sections_1.append(div_creator)
    console.log(`${property}: ${main_content_tittles[property]}`);
    
    for (const property in main_content_content ) {
        var content_text = document.createElement("p")
        content_text.innerText = `${main_content_content[property]}`
        div_creator.append(content_text)
        console.log(`${property}: ${main_content_content[property]}`);
    }
}

var moreButton = document.getElementById("More_button")
var apearing_options_menu_more = document.getElementById("apearing_options_menu_more")

moreButton.addEventListener("click", function(){
    if (apearing_options_menu_more.style.display === "none"){
        apearing_options_menu_more.style.display = "flex"
    }else{
        apearing_options_menu_more.style.display = "none"
    }
})