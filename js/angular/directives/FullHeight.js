
angular.module('tommaso-previero.directives')

.directive('fullHeight', [function() {
    
    var elements = [];
    
    $(window).resize(function() {
        for(var i=0; i<elements.length; i++) {
            $(elements[i]).height($(window).height());
        }
    });
    
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.height($(window).height());
            elements.push(element);
        }
    };
}]);