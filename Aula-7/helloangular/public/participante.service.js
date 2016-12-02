//participante.service.js
angular.module("anguhello")
    .service("participanteService", function($http){
        this.buscarParticipantes = () => $http.get("participantes");
        this.salvarParticipante = (part) => $http.post("participante", part);
    });