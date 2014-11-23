angular.module('portfolio2App')
  .controller('AmpersandCtrl', function ($scope) {
    angleHandle();
    window.onresize = angleHandle;

    bgSetter('syrup');


  });
