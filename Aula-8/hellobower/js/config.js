// config.js
function Tela1Controller(){
    this.comp1 = " do SPA no controle 1";
}

function Tela2Controller(){
    this.comp2 = " do SPA no controle 2";
}

// Roteamento da tela1.html
angular.module("hellobower").config( ($routeProvider) => {
    $routeProvider
    .when("/", {
        controller : Tela1Controller,
        templateUrl : "template/tela1.html",
        controllerAs : "ctl"
    })
    .when("/tela1", {
        controller : Tela1Controller,
        templateUrl : "template/tela1.html",
        controllerAs : "ctl"
    })
    .when("/tela2", {
        controller : Tela2Controller,
        templateUrl : "template/tela2.html",
        controllerAs : "ctl"
    });
});