var app = angular.module("shopMod",["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    controller:"landingCtrl",
    templateUrl:"views/landing.html"
  })
  .when("/viewTwo",{
    controller:"viewTwoCtrl",
    templateUrl:"views/viewTwo.html"
  })
  .otherwise({redirectTo:"/whale"});
  $locationProvider.hashPrefix("");
});
