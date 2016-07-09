
angular.module('tommaso-previero.directives')

.directive('timelineExpand', [function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).css('max-height', '90px');
			$(element).css('overflow', 'hidden');
			var readMore =  $('<p class="timeline-expand"><span>...</span><a><i>read more</i></a></p>');
			readMore.on('click', function() {
				readMore.fadeOut();
				$(element).css('max-height', '1000px');
				$(element).css('transition', 'max-height 0.25s ease-in');
			});
			$(element).append(readMore);
		}
	};
}]);