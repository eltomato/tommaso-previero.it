
angular.module('tommaso-previero.services')

.service('getInTouchService', ['BACKEND_ENDPOINT', '$http', 'deviceDetector', function(BACKEND_ENDPOINT, $http, deviceDetector) {

	var me =  {
		doGetInTouch: function(infos) {
			if(deviceDetector.browser == 'safari') {
				return $http.get('https://crossorigin.me/' + BACKEND_ENDPOINT, {
					params: {
						service: 'getInTouch',
						name: infos.name,
						email: infos.email,
						subject: infos.subject,
						message: infos.message
					}
				});
			} else {
				return $http.get(BACKEND_ENDPOINT, {
					params: {
						service: 'getInTouch',
						name: infos.name,
						email: infos.email,
						subject: infos.subject,
						message: infos.message
					}
				});
			}
		},
	};

	return me;
}]);
