
angular.module('tommaso-previero.constants', []);
angular.module('tommaso-previero.services', []);
angular.module('tommaso-previero.controllers', []);
angular.module('tommaso-previero.directives', []);

var tommasoPreviero = angular.module('tommaso-previero', [
    'tommaso-previero.constants',
    'tommaso-previero.services',
    'tommaso-previero.controllers',
    'tommaso-previero.directives',
    'ngSanitize',
    'ngAnimate',
    'uib/template/carousel/carousel.html',
    'uib/template/carousel/slide.html',
    'ui.bootstrap.carousel',
    'angularTypewrite',
    'ng.deviceDetector',
    'ngMap',
    'angulartics',
    'angulartics.google.analytics'
]);