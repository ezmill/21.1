// 'use strict';

// /**
//  * @ngdoc function
//  * @name portfolio2App.controller:AboutCtrl
//  * @description
//  * # AboutCtrl
//  * Controller of the portfolio2App
//  */


// var gl;
angular.module('portfolio2App')
  .controller('Ezra_IoCtrl', function ($scope) {
  	angleHandle();
    window.onresize = angleHandle;

    bgSetter('ezra_io');
  });
//   