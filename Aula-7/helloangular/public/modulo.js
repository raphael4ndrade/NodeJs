angular
  .module("anguhello", ["ngRoute"])
  .config(($routeProvider) => {

    $routeProvider.when("/eventos", {
      controller: "eventoController",
      templateUrl: "templates/events-main.html",
      controllerAs: "ctl"
    });

    $routeProvider.when("/eventos/:id_evento/participantes", {
      controller: "eventoController",
      templateUrl: "templates/events-part.html",
      controllerAs: "ctl"
    });

    $routeProvider.when("/participantes", {
      controller: "participanteController",
      templateUrl: "templates/participantes-main.html",
      controllerAs: "ctl"
    });

    $routeProvider.when("/participantes/:id_participante/eventos", {
      controller: "participanteController",
      templateUrl: "templates/participantes-event.html",
      controllerAs: "ctl"
    });

    $routeProvider.when("/participar-de-evento", {
      controller: "joinEventController",
      templateUrl: "templates/join-event.html",
      controllerAs: "ctl"
    });

    $routeProvider.otherwise("/eventos");
  });