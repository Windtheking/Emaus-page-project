/**
 * ================================================================
 *  REPOSITORIO DE EVENTOS (capa "repositorio -> base de datos")
 * ================================================================
 * Único archivo que sabe DÓNDE viven los datos de los eventos.
 * Hoy usa localStorage del navegador, solo para poder probar la
 * funcionalidad de principio a fin sin backend.
 *
 * Cuando se conecte Supabase, este es el ÚNICO archivo que debe
 * cambiar: reemplaza el cuerpo de getAll/save/insert/deleteById por
 * las llamadas equivalentes (supabase.from('eventos').select(),
 * .insert(), .delete()...) manteniendo la misma forma pública, para
 * que eventos.service.js y eventos.controller.js no necesiten tocarse.
 */
const EventsRepository = {
    STORAGE_KEY: "emaus_eventos",

    getAll() {
        var raw = localStorage.getItem(this.STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    },

    save(events) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
    },

    insert(event) {
        var events = this.getAll();
        events.push(event);
        this.save(events);
        return event;
    },

    deleteById(id) {
        var events = this.getAll().filter(function(evento) {
            return evento.id !== id;
        });
        this.save(events);
    }
};
