console.log("JS is working")

var moreButton = document.getElementById("More_button")
var apearing_options_menu_more = document.getElementById("apearing_options_menu_more")

moreButton.addEventListener("click", function(){
    if (apearing_options_menu_more.style.display === "none"){
        apearing_options_menu_more.style.display = "flex"
    }else{
        apearing_options_menu_more.style.display = "none"
    }
})