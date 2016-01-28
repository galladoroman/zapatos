'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('ContactoCtrl', function ($scope) {
   
   $scope.enviar = function(){
   	
   	$scope.minombre = $scope.nombre + '  ' + $scope.correo + ' ' + $scope.telefono;
   }
  });
