/**
 * ================================================================
 *  SERVICIO DE EVENTOS (capa "servicio", usa EventsRepository)
 * ================================================================
 * Contiene toda la lógica de negocio: validación de campos, cálculo
 * del vencimiento (expiraEn) y orden de la lista. No toca el DOM ni
 * sabe cómo/dónde se guardan los datos, solo habla con EventsRepository.
 */
const EventsService = {

    UNIDADES_EN_MS: {
        horas: 60 * 60 * 1000,
        dias: 24 * 60 * 60 * 1000,
        semanas: 7 * 24 * 60 * 60 * 1000
    },

    listSorted() {
        return EventsRepository.getAll().slice().sort(function(a, b) {
            var fechaHoraA = a.fecha + " " + (a.hora || "00:00");
            var fechaHoraB = b.fecha + " " + (b.hora || "00:00");
            return fechaHoraA.localeCompare(fechaHoraB);
        });
    },

    calcularExpiraEn(expiraCantidad, expiraUnidad) {
        var cantidad = parseInt(expiraCantidad, 10);
        if (!cantidad || cantidad <= 0) return null;
        var msPorUnidad = this.UNIDADES_EN_MS[expiraUnidad];
        if (!msPorUnidad) return null;
        return Date.now() + cantidad * msPorUnidad;
    },

    createEvent(datos) {
        if (!datos.fecha || !datos.lugar || !datos.contexto) {
            throw new Error("Fecha, lugar y contexto son obligatorios.");
        }

        var evento = {
            id: "evt_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
            fecha: datos.fecha,
            hora: datos.hora || "",
            lugar: datos.lugar,
            contexto: datos.contexto,
            creadoEn: Date.now(),
            expiraEn: this.calcularExpiraEn(datos.expiraCantidad, datos.expiraUnidad)
        };

        return EventsRepository.insert(evento);
    },

    deleteEvent(id) {
        EventsRepository.deleteById(id);
    },

    purgeExpired() {
        var ahora = Date.now();
        var vencidos = EventsRepository.getAll().filter(function(evento) {
            return evento.expiraEn && evento.expiraEn <= ahora;
        });
        vencidos.forEach(function(evento) {
            EventsRepository.deleteById(evento.id);
        });
        return vencidos.length > 0;
    }
};
