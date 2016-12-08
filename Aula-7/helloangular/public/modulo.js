// modulo.js
angular.module("anguhello",[
    "ngRoute"
])

angular.module("anguhello").config(($routeProvider) => {

  $routeProvider.when("/eventos", {
    controller:"eventoController",
    templateUrl:"eventos.html",
    controllerAs:"ctl"
  });

  $routeProvider.when("/participantes", {
    controller:"participanteController",
    templateUrl:"participantes.html",
    controllerAs:"ctl"
  });

  $routeProvider.otherwise("/eventos");

});