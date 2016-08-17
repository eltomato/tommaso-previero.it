angular.module('tommaso-previero.controllers')

.controller('ReferencesController', ['$scope', '$interval', function($scope, $interval) {
	
	$scope.active = 0;

	$scope.references = [{
		quote: 'Based on his work, I would rank him as one of the best we have ever had.<br>'+
			'[..]<br>'+
			'Tommaso distinguished himself for the solid background and the ability to quickly learn new technologies. He is a problem-solver and I often assigned projects to Tommaso independently.<br>'+
			'In my opinion, Tommaso is a hard-working self-starter who invariably understands exactly what a project is all about.<br>'+
			'Seldom have I been able to recommend someone without reservation. It is a pleasure to do so in the case of Tommaso.<br>'
			+'[..]',
		author: 'Emanuele Sandri, CEO of E-Time S.r.l.'
	},{
		quote: 'I worked with Tommaso from March 2013 to June 2016 at Arca Assicurazioni (an insurance company based in Verona), when he left to go to Australia. <br>'+
				'Tommaso is a skilled, fast-learning innovative and curious guy. <br>'+
				'His main strenghts are for sure smartness, curiosity and proactivity. <br>'+
				'It was a pleasure to share a little path of my working and personal life with him. <br>'+
				'I believe that he\'s a very valuable person to work with. <br>'+
				'I hope to work with him again sooner or later.',
		author: 'Matteo Facchin, Vice Head of Web Development Department at Arca Assicurazioni'
	},{
		quote: 'I am very pleased to write this letter of reference for Tommaso Previero.<br>'+
				'My role is Software Development Responsible at Arca Vita.<br>'+
				'Arca Vita is member of Unipol Sai Group, the biggest Italian Insurance Company. Arca Vita is specilized in bancassurance.<br>'+
				'The IT department at Arca Vita develop and manage all the software necessary to go on.<br>'+
				'Tommaso has been employed as software developer from March 2013 until June 2016.<br>'+
				'He ended his job with Arca Vita following his decision to face new opportunities and move abroad, looking for new professional challenges and personal experiences.<br>'+
				'He had the opportunity to work in a team on important project using advanced technology and methodology.<br>'+
				'He immediately showed technological knowledge, learning ability, attitude to problem solving becoming a technical leader for the team.<br>'+
				'I greatly appreciate his way of thinking, his open-minded, his talent in finding solutions and opportunity.<br>'+
				'He is a friendly person, an excellent team-player who had very good relationships with everybody in the Company.<br>'+
				'We remember Tommaso very well and we would be happy to work again with him in case he will come back to Italy.',
		author: 'Daniele Campanini, Software Development Responsible'
	},{
		quote: 'You are the most beautiful, respectful and sweet person I know.',
		author: 'Mum'
	}/*,{
		quote: 'Winter is coming.',
		author: 'Lord Eddard Stark'
	}*/];
	
}]);