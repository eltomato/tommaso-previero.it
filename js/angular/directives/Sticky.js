angular.module('tommaso-previero.directives')

.directive('sticky', [function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).sticky({
				topSpacing: 0
			});
		}
	};
}]);