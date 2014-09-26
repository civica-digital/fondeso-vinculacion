'use strict';

angular
  .module('questionaryApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'questionModule',
    'templates'
  ])
  .run(['$location', function($location){
    console.log($location.url());
  }])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/questionary/', {
        templateUrl: 'intro.html',
      })
      .when('/questionary/test/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .when('/profile/', {
        templateUrl: 'fund.html',
        controller: 'FundCtrl'
      })
      .when('/profile/:category/', {
        templateUrl: 'fund.html',
        controller: 'FundCtrl'
      })
      .when('/tie/', {
        templateUrl: 'ties.html',
        controller: 'TieCtrl',
        controllerAs: 'tie'
      })
      .otherwise({
        redirectTo: '/404'
      });

     $locationProvider.html5Mode(true);
  }]);
