angular.module('tommaso-previero.controllers')

.controller('ReferencesController', ['$scope', '$interval', function($scope, $interval) {
	
	$scope.active = 0;

	$scope.references = [{
		quote: 'You are the most beautiful, respectful and sweet person I know.',
		author: 'Mum'
	},{
		quote: 'Winter is coming.',
		author: 'Lord Eddard Stark'
	}];
	
}]);