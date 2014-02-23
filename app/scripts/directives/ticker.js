'use strict';

angular.module('readFasterApp')
  .directive('ticker', function() {
    return {
      template: '<span></span>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var span = element.children()[0],
          i = 0,
          words = [];

        parse(scope.text);
        renderNextWord();

        setInterval(function() {
          renderNextWord();
        }, 400);

        scope.$watch('text', function(text) {
          parse(text);
          i = 0;
        });

        function renderNextWord() {
          span.innerHTML = words[i++ % words.length];
        }

        function parse(text) {
          words = scope.text.split(/[\s|\n]/);
        }

      }
    };
  });
