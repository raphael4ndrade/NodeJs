// evento.controllers.js
angular.module("anguhello")
    .controller("eventoController", function(eventoService){
        this.novo = {};

        this.listar = () => eventoService.buscarEventos()
            .then( (ret) => this.listEvents = ret.data );

        this.listar();

        this.salvarEvento = () => {
            eventoService.salvarEvento(this.novo).then( (ret) => {
                this.listar();
                this.novo = {};
            });
        };

        this.buscarParticipantes = () => {
            eventoService.buscarParticipantes().then( (ret) => {
                this.listPart = ret.data;
                console.log(listPart);
            });
        } 
});