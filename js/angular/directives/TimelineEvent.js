
angular.module('tommaso-previero.directives')

.directive('timelineEvent', [function() {
	return {
		restrict: 'A',
		scope: {},
		template: '<li ng-class="{\'timeline-inverted\': align == \'right\'}">' +
					'<div class="posted-date">' +
						'<span class="month">{{::date}}</span>' +
					'</div>' +
					'<div class="timeline-panel wow fadeInUp">' +
						'<div class="timeline-content">' +
							'<div class="timeline-heading">' +
								'<h3 ng-bind-html="title"></h3>' +
								'<span ng-bind-html="subtitle"></span>' +
							'</div>' +
							'<div ng-if="expandable" timeline-expand class="timeline-body">' +
								'<p ng-bind-html="description"></p>' +
							'</div>' +
							'<div ng-if="!expandable" class="timeline-body">' +
								'<p ng-bind-html="description"></p>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</li>',
		link: function(scope, element, attrs) {
			scope.date = attrs['date'];
			scope.title = attrs['title'];
			scope.subtitle = attrs['subtitle'];
			scope.description = attrs['description'];
			scope.align = attrs['align'];
			scope.expandable = attrs['expandable'] || false;
			element.replaceWith(element.children());
		}
	};
}]);