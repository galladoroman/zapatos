'use strict';

/**
 * @ngdoc overview
 * @name zapatosApp
 * @description
 * # zapatosApp
 *
 * Main module of the application.
 */
angular
  .module('zapatosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/portada.html',
        controller: 'PortadaCtrl',
        controllerAs: 'portada'
      })
      .when('/catalogo', {
        templateUrl: 'views/catalogo.html',
        controller: 'CatalogoCtrl',
        controllerAs: 'catalogo'
      })
      .when('/empresa', {
        templateUrl: 'views/empresa.html',
        controller: 'EmpresaCtrl',
        controllerAs: 'empresa'
      })
      .when('/cesta', {
        templateUrl: 'views/cesta.html',
        controller: 'CestaCtrl',
        controllerAs: 'cesta'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapaCtrl',
        controllerAs: 'mapa'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
