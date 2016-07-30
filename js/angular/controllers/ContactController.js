angular.module('tommaso-previero.controllers')

.controller('ContactController', ['$scope', 'mapService', 'getInTouchService', function($scope, mapService, getInTouchService) {
    
    $scope.infos = {};
    $scope.contactSent = false;
    
    $scope.sendContactInfos = function(form) {
        if($scope.infos.name && $scope.infos.email && $scope.infos.subject && $scope.infos.message) {
        	getInTouchService.doGetInTouch($scope.infos).success(function() {
                form.$setPristine();
                form.$setUntouched();
                $scope.infos = {};
                $scope.contactSent = true;
            });
        }
    };
    
    $scope.writeAgain = function() {
    	$scope.contactSent = false;
    };

	mapService.getMarkers().success(function(markers) {
		if (markers && markers.length > 0) {
			$scope.marker = markers[markers.length-1];
		}
		else {
			$scope.marker = [
				[45.416479, 10.990409],
				[45.716479, 10.990409]
			]
		}
	});
	
	$scope.getMapCenter = function() {
		if($scope.marker) {
			return $scope.marker[0] + ", " + $scope.marker[1];
		}
	};
	
	$scope.styles = [{
        featureType: "landscape",
        stylers: [{
            color: '#f7f7f7'
        }]
    }, {
        featureType: "natural",
        stylers: [{
            hue: '#00ffe6'
        }]
    }, {
        featureType: "road",
        stylers: [{
            hue: '#fff'
        }, {
            saturation: -70
        }]
    }, {
        featureType: "building",
        elementType: "labels",
        stylers: [{
            hue: ''
        }]
    }, {
        featureType: "poi", //points of interest
        stylers: [{
            hue: ''
        }]
    }];
}]);