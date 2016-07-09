
angular.module('tommaso-previero.directives')

.directive('inviewSkillProgress', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $.each($('div.progress-bar'),function(){
                        $(this).css('width', $(this).attr('aria-valuenow')+'%');
                    });
                    $(this).unbind('inview');
                }
            });
        }
    };
}]);