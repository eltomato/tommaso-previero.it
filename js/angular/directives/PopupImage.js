angular.module('tommaso-previero.directives')

.directive('popupImage', [function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).magnificPopup({

				gallery: {
					enabled: true
				},
				removalDelay: 300, // Delay in milliseconds before popup is removed
				mainClass: 'mfp-with-zoom', // this class is for CSS animation below
				type: 'image'
			});
		}
	};
}]);
