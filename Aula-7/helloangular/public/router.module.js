// modulo.js
angular
  .module("anguhello")
  .config(($routeProvider) => {

    $routeProvider.when("/eventos", {
      controller: "eventoController",
      templateUrl: "templates/eventos.html",
      controllerAs: "ctl"
    });

    $routeProvider.when("/participantes", {
      controller: "participanteController",
      templateUrl: "templates/participantes.html",
      controllerAs: "ctl"
    });

    $routeProvider.otherwise("/eventos");

  });