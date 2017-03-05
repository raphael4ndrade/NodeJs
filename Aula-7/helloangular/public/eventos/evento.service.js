// servicos.js
angular.module("anguhello")
    .service("eventoService", function ($http) {
        this.buscarEventos = () => $http.get("/eventos");
        this.salvarEvento = (ev) => $http.post("/evento", ev);
        this.buscarParticipantes = () => $http.get("/eventos/:id_evento/participantes");
    });