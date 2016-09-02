angular.module('tommaso-previero.controllers')

.controller('ResumeController', ['$scope', function($scope) {

	$scope.timelineEntries = [{
		date: '25 August 2016',
		title: 'Made my road to Oz!',
		subtitle: 'Cairns, Queensland, Australia',
		description: 'Time to fly!'
	}, {
		date: '2015-2016',
		title: 'Software Engineer at <a href="http://www.e-time.it/en/" target="_blank">e-time<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Permanent consultant for <a href="http://www.arcassicura.it/opencms/index.jsp" target="_blank">Arca Assicurazioni<i class="fa fa-external-link external-link"></i></a>.<br>Verona, Italy',
		description: 'Assisted in all the tasks of the software lifecycle.<br>'+
			'Tasks from the proposal of new functionalities to the development, testing and deploying were part of my duties.<br>'+
			'As a professional consultant my duties also consisted in: ' +
			'<ul>'+
				'<li><i class="fa fa-dot-circle-o"></i> Sponsorship, implementation and facilitation about the penetration of new methodologies, tools, technologies and best practices.</li>'+
				'<li><i class="fa fa-dot-circle-o"></i> Managing of the interpersonal dynamics and the institutional communications.</li>'+
			'</ul>'+
			'Improved my skills and sensitivity related to the insurance domain, even international.<br>'+
			'Everyday languages: Java, Javascript, SQL, HTML, CSS, Groovy.<br>'+
			'Everyday frameworks and tools: Maven, Spring, JSF, PrimeFaces, JUnit, Selenium, FitNesse, AngularJS, JQuery, Bootstrap, Confluence, Jira, Splunk, Liferay, Tomcat, Jetty, WebSphere, Oracle Database.',
		expandable: true
	}, {
		date: '2014-2015',
		title: 'Master Degree in Software Engineering and Security',
		subtitle: 'Verona University, Italy',
		description: 'The goal of the Master Degree in Software Engineering and Security is to provide wider methodological basics to the students in order to let them face and handle problems about the design, verification, analisys and development of complex informatics systems.'
	}, {
		date: '2013-2015',
		title: 'Senior Software Developer at <a href="http://www.e-time.it/en/" target="_blank">e-time<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Permanent consultant for <a href="http://www.arcassicura.it/opencms/index.jsp" target="_blank">Arca Assicurazioni<i class="fa fa-external-link external-link"></i></a>.<br>Verona, Italy',
		description: 'As a consultant, my duties were related to all the software lifecycle.<br>'+
			'Main tasks were the development of new software solution that could improve and helps the smooth evolution of the workflows and processes present in the company.<br>'+
			'Everyday languages: Java, Javascript, SQL, HTML, CSS, Groovy.<br>'+
			'Everyday frameworks and tools: Maven, Spring, JSF, PrimeFaces, JUnit, Selenium, FitNesse, AngularJS, JQuery, Bootstrap, Confluence, Jira, Splunk, Liferay, Tomcat, Jetty, WebSphere, Oracle Database.',
		expandable: true
	}, {
		date: '2011-2012',
		title: 'Bachelor Degree in Computer Science',
		subtitle: 'Verona University, Italy',
		description: 'The goal of the Bachelor Degree in Computer Science is to provide knowledge and skills in various fields of Computer Science and Information Technology. The main focus is on information systems, databases, complex software architectures, information and data modelization, network services and systems security.'
	}, {
		date: '2011-2012',
		title: 'Software Developer at <a href="http://www.e-time.it/en/" target="_blank">e-time<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Permanent working contract. Worked for: <a href="http://www.intesasanpaolo.com/" target="_blank">Intesa Sanpaolo<i class="fa fa-external-link external-link"></i></a>, <a href="http://www.gruppobancopopolare.it/en/" target="_blank">SGS Banco Popolare<i class="fa fa-external-link external-link"></i></a>, <a href="http://www.arcassicura.it/opencms/index.jsp" target="_blank">Arca Assicurazioni<i class="fa fa-external-link external-link"></i></a>, <a href="https://www.docebo.com/" target="_blank">Docebo<i class="fa fa-external-link external-link"></i></a>.<br>Verona, Italy',
		description: 'Duties covered all the software lifecycle.<br>'+
			'As the clients changed as well the languages and the skills required evolved and grown.<br>'+
			'I\'ve always been able to satisfy the expectations with hard work and my innate curiosity.<br>'+
			'Having the possibility to work in such large environments led me to a deeper consciousness about all the software lifecycle and about myself and my capabilities.',
			expandable: true
	}, {
		date: '2010-2011',
		title: 'Software Developer at <a href="http://www.e-time.it/en/" target="_blank">e-time<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Term contract. Worked for: <a href="http://www.intesasanpaolo.com/" target="_blank">Intesa Sanpaolo<i class="fa fa-external-link external-link"></i></a><br>Verona, Italy',
		description: 'Contributions mainly to a product for our main customer in term of planning, realization, testing and maintenance.<br>'+
			'The product was an utility to be used to smooth the communications between end user and the bank, as well as between banks, it\'s name bacame <a href="http://www.e-time.it/en/en-eformat" target="_blank">eFormat<i class="fa fa-external-link external-link"></i></a><br>'+
			'Main languages used were Java, SQL, Javascript.',
		expandable: true
	}, {
		date: '2009',
		title: 'Software Developer at <a href="http://www.e-time.it/en/" target="_blank">e-time<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Term contract.<br>Verona, Italy',
		description: 'Continuation of the experience achieved during the last year of High School.<br>'+
			'Strengthening of all the technical skills, as well the critical approach to the software development.'
	}, {
		date: '2008',
		title: 'Software Developer at <a href="http://www.e-time.it/en/" target="_blank">e-time<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Term contract.<br>Verona, Italy',
		description: 'Experience achieved during the last year of High School.<br>'+
			'Contribution to the development of a management system for a company that offers wireless connectivity in the north Italy in areas not yet completly covered by internet connection.<br>'+
			'The languages used in the project were PHP, Javasctipt, SQL and everything related. Also used some useful PHP and Javascript framework like Zend and Dojo.<br>'+
			'The system was able to take care of various type of notification to and from the users, commercial aspects and other things like management of the users or the system itself.',
		expandable: true
	},{
		date: '2007-2008',
		title: 'High School Diploma at <a href"https://www.marconiverona.gov.it/portal/" target="_blank">ITIS G. Marconi<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Head Technician in Computer Technology.',
		description: 'The goal of the Head Technician in Computer Technology High School is to provide strong bases useful to design, implement and maintain software information systems as well as network infrastructures.<br>'+
		'Along with technology skills also a strong emphasis is given to all science literature and mindset.',
		expandable: true
	}, {
		date: 'Summer 2007',
		title: 'Mobile Developer at <a href="https://www.vulcaniasystem.it/" target="_blank">Vulcania System<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Term contract.<br>Verona, Italy',
		description: 'Project work during high school summer vacations.<br>' +
			'The project consisted of an application to be installed on mobile phones (using j2me). The system had to grant the ability to send predefined SMS client-side and, after received server-side, to dispatch them properly using a PHP script.'
	}, {
		date: 'Summer 2006',
		title: 'Software Developer &amp; Tester at <a href="http://www.swht.eu/" target="_blank">SWht SoftWork<i class="fa fa-external-link external-link"></i></a>',
		subtitle: 'Stage managed by high school <a href"https://www.marconiverona.gov.it/portal/" target="_blank">ITIS G. Marconi<i class="fa fa-external-link external-link"></i></a>.<br>Verona, Italy',
		description: 'Internship consumed during high school summer vacations.<br>' + 
			'The main duties were the search of abnormal behaviours in desktop applications written in Visual Basic or C# as well the development of some web pages containing simple forms that were sent by email as notifications.'
	}, {
		date: '1989',
		title: 'The beginning of time',
		subtitle: '',
		description: 'Just joking, I was born this year! :)'
	}];
}]);