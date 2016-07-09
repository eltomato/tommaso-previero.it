
angular.module('tommaso-previero.directives')

.directive('popupVideo', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-with-zoom',
                removalDelay: 300,
                preloader: false,
                fixedContentPos: false
            });
        }
    };
}]);