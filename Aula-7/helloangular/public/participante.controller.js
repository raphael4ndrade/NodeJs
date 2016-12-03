// participante.controller.js
angular.module("anguhello")
    .controller("participanteController", function(participanteService){
        this.novo = {};

        this.listar = () => participanteService.buscarParticipantes()
            .then( (ret) => this.participantes = ret.data);

        this.listar();

        this.salvarParticipante = () => {
            participanteService.salvarParticipante(this.novo).then( (ret) => {
                alert("Participante salvo com id " + ret.data.id_participante);
                this.listar();
                this.novo = {};
            });
        };
    });