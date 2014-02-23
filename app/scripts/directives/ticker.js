'use strict';

angular.module('readFasterApp')
  .directive('ticker', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ticker directive');
      }
    };
  });
