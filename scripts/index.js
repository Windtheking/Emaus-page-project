/**
 * ============================================================
 *  CONFIGURACIÓN DEL CANAL DE YOUTUBE (en vivo de la comunidad)
 * ============================================================
 * Este bloque controla qué canal se muestra en el reproductor
 * en vivo de la pantalla de inicio. Para conectarlo con el canal
 * real de la comunidad, reemplaza el valor de YOUTUBE_CHANNEL_ID
 * por el Channel ID real (siempre empieza con "UC...").
 *
 * ¿Cómo consigo el Channel ID a partir del @handle o del enlace del canal?
 *   1) Si tienes el @handle (ej: https://www.youtube.com/@ComunidadEmaus):
 *      a) Abre esa URL en el navegador.
 *      b) Click derecho -> "Ver código fuente de la página" (o Ctrl+U).
 *      c) Busca (Ctrl+F) el texto "channelId" y copia el valor que
 *         aparece justo después, entre comillas (empieza con "UC").
 *   2) Si ya tienes un enlace tipo https://www.youtube.com/channel/UCxxxxxx:
 *      el Channel ID es directamente ese segmento "UCxxxxxx".
 *   3) Pega ese valor aquí abajo, reemplazando "TU_CHANNEL_ID_AQUI".
 *
 * Ejemplo: const YOUTUBE_CHANNEL_ID = "UCLA_DkiJn3xR_hFvSHkJgeQ";
 *
 * Mientras este valor siga siendo el placeholder, la página muestra
 * directamente el mensaje de "no hay en vivos" sin intentar contactar
 * a YouTube (para no generar peticiones/errores innecesarios).
 */
const YOUTUBE_CHANNEL_ID = "UCSApkNl6XmsJttHWdcS5nrQ";

document.addEventListener("DOMContentLoaded", function() {

    var livePlayerIframe = document.getElementById("youtube_live_player");
    var offlineMessage = document.getElementById("live_offline_message");
    var ytPlayer = null;
    var retryTimer = null;
    var RETRY_INTERVAL_MS = 3 * 60 * 1000; // reintenta cada 3 minutos si no hay en vivo

    function showOffline() {
        livePlayerIframe.style.display = "none";
        offlineMessage.style.display = "flex";
    }

    function showLive() {
        livePlayerIframe.style.display = "block";
        offlineMessage.style.display = "none";
    }

    function scheduleRetry() {
        if (retryTimer) return;
        retryTimer = setInterval(function() {
            if (ytPlayer && typeof ytPlayer.destroy === "function") {
                ytPlayer.destroy();
            }
            createPlayer();
        }, RETRY_INTERVAL_MS);
    }

    function createPlayer() {
        livePlayerIframe.src =
            "https://www.youtube.com/embed/live_stream?channel=" +
            YOUTUBE_CHANNEL_ID +
            "&autoplay=1&mute=1&enablejsapi=1";

        ytPlayer = new YT.Player("youtube_live_player", {
            events: {
                onReady: function() {
                    showLive();
                },
                onStateChange: function(event) {
                    if (event.data === YT.PlayerState.ENDED) {
                        showOffline();
                        scheduleRetry();
                    } else if (event.data === YT.PlayerState.PLAYING) {
                        showLive();
                    }
                },
                onError: function() {
                    showOffline();
                    scheduleRetry();
                }
            }
        });
    }

    // Sin canal configurado todavía: mostramos el mensaje y no llamamos a YouTube.
    if (!YOUTUBE_CHANNEL_ID || YOUTUBE_CHANNEL_ID === "TU_CHANNEL_ID_AQUI") {
        showOffline();
        return;
    }

    showOffline(); // estado inicial mientras carga la API de YouTube

    if (window.YT && window.YT.Player) {
        createPlayer();
    } else {
        var apiScript = document.createElement("script");
        apiScript.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(apiScript);
        window.onYouTubeIframeAPIReady = createPlayer;
    }
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