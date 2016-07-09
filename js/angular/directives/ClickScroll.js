
angular.module('tommaso-previero.directives')

.directive('clickScroll', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).on('click', function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1000);
                e.preventDefault();
            })
        }
    };
}]);