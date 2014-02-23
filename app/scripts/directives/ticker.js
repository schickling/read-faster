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
          var word = words[i++ % words.length],
            middle = Math.floor(word.length / 2),
            leftPart = word.slice(0, middle),
            red = word[middle],
            rightPart = word.slice(middle + 1),
            computedStyle = getComputedStyle(span),
            sizeOptions = {
              font: computedStyle.fontFamily,
              fontSize: computedStyle.fontSize,
              fontWeight: computedStyle.fontWeight
            },
            leftPartSize = calculateSize(leftPart, sizeOptions),
            redSize = calculateSize(red, sizeOptions);

          span.innerHTML = leftPart + '<red>' + red + '</red>' + rightPart;
          span.style.marginLeft = -(leftPartSize.width + redSize.width / 2 + 1) + 'px';
        }

        function parse(text) {
          words = scope.text.split(/[\s|\n|,|-]+/);
        }

      }
    };
  });
