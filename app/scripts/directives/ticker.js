'use strict';

angular.module('readFasterApp')
  .directive('ticker', function() {
    return {
      template: '<span>{{word}}</span>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.word = "Test";
        // element.text('this is the ticker directive');
      }
    };
  });
