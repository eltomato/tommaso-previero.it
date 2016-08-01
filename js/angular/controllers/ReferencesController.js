angular.module('tommaso-previero.controllers')

.controller('ReferencesController', ['$scope', '$interval', function($scope, $interval) {
	
	$scope.active = 0;

	$scope.references = [{
		quote: 'I worked with Tommaso from March 2013 to June 2016 at Arca Assicurazioni (an insurance company based in Verona), when he left to go to Australia. <br>'+
				'Tommaso is a skilled, fast-learning innovative and curious guy. <br>'+
				'His main strenghts are for sure smartness, curiosity and proactivity. <br>'+
				'It was a pleasure to share a little path of my working and personal life with him. <br>'+
				'I believe that he\'s a very valuable person to work with. <br>'+
				'I hope to work with him again sooner or later.',
		author: 'Matteo Facchin, Vice Head of Web Development Department at Arca Assicurazioni'
	},{
		quote: 'You are the most beautiful, respectful and sweet person I know.',
		author: 'Mum'
	},{
		quote: 'Winter is coming.',
		author: 'Lord Eddard Stark'
	}];
	
}]);