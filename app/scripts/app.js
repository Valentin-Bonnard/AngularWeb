'use strict';

/**
 * @ngdoc overview
 * @name projectMapsClearApp
 * @description
 * # projectMapsClearApp
 *
 * Main module of the application.
 */
var app = angular.module('projectMapsClearApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'openweather'
]);

app.controller('controller', ['$scope', 'openweathermapFactory', function (scope, weather) {

  let _appid = "105ac2b2036bdfbb8c6ae07ae71bbc79";

  weather.getWeatherFromCitySearchByName({
    q: "paris",
    appid: _appid,
    units: "Metric"
  }).then(function (_data, _err) {
    if (!_err) {
      console.info("weather from city by name", _data.data.main.temp);
      scope.city = _data.data.name;
      scope.degree = _data.data.main.temp;
    }
    else
      console.info("This is an error", _err);
  });
}]);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/portfolio', {
      templateUrl: 'views/portfolio.html',
      controller: 'PortfolioCtrl',
      controllerAs: 'portfolio'
    })
    .when('/service', {
      templateUrl: 'views/service.html',
      controller: 'ServiceCtrl',
      controllerAs: 'service'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl',
      controllerAs: 'contact'
    })
    .otherwise({
      redirectTo: '/'
    });
}).animation('.reveal-animation', function () {
  return {
    enter: function (element, done) {
      element.css('display', 'none');
      console.log(element);
      element.fadeIn(5000, done);
      return function () {
        element.stop();
      }
    },
    leave: function (element, done) {
      element.fadeOut(500, done)
      return function () {
        element.stop();
      }
    }
  }
});

