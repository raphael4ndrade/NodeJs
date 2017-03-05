// evento.controllers.js
angular.module("anguhello")
    .controller("eventoController", function(eventoService){
        this.novo = {};

        this.listar = () => eventoService.buscarEventos()
            .then( (ret) => this.eventos = ret.data );

        this.listar();

        this.salvarEvento = () => {
            eventoService.salvarEvento(this.novo).then( (ret) => {
                alert("evento salvo com id " + ret.data.id_evento);
                this.listar();
                this.novo = {};
            });
        };
});