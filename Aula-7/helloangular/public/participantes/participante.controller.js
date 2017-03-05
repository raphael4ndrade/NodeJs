// participante.controller.js
angular.module("anguhello")
    .controller("participanteController", function(participanteService){
        this.novo = {};

        this.listar = () => participanteService.buscarParticipantes()
            .then( (ret) => this.participantes = ret.data);

        this.listar();

        this.salvarParticipante = () => {
            participanteService.salvarParticipante(this.novo).then( (ret) => {
                this.listar();
                this.novo = {};
            });
        };
    });