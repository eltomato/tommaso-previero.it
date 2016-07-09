
angular.module('tommaso-previero.directives')

.directive('includeReplace', [function() {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.replaceWith(element.children());
        }
    };
}]);