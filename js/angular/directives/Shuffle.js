angular.module('tommaso-previero.directives')

.directive('shuffle', [function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var grid = $(element).find('[shuffle-grid]').shuffle({
				itemSelector: '.portfolio-item'
			});

			var previousActive = null;
			$(element).find('[shuffle-filter]').click(function(e) {
				e.preventDefault();

				if(previousActive) {
					previousActive.removeClass('active');
				}
				previousActive = $(this).addClass('active');

				var groupName = $(this).attr('data-group');

				grid.shuffle('shuffle', groupName);
			});
		}
	};
}]);