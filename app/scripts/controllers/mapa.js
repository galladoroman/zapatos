'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:MapaCtrl
 * @description
 * # MapaCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('MapaCtrl', function ($scope, $http) {

  	
  	$scope.meteo = function(){
  		

  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.ciudad+','+$scope.city+'&units=metric&appid=2de143494c0b295cca9337e1e96b00e0')
        .success(function(data) {
            $scope.localidad = data.name;
            $scope.temperatura = data.main.temp;
            $scope.presion = data.main.pressure;
            $scope.presion = data.main.humidity;
            $scope.presion = data.main.temp_min;
            $scope.mitemperatura = data.name + '  ' + data.main.temp + ' ºC '
              +  data.main.pressure + '      ' + 'milibares ' +  
              data.main.humidity + '      ' + '% humedad ' +  ' Temperatura mínima' +
              data.main.temp_min + '      ' + 'ºC';
        })           
        .error(function(data, status, headers, config) {
            console.debug(data, status, headers, config);
        }); 
   }

  
  });

