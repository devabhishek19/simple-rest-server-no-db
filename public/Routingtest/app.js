angular.module('app', ['ngRoute']).
	config(function($routeProvider){
		$routeProvider.
			when('/',{
				template: "home.html"
			}).
			when('/about',{ template: "about.html"}).
			when('/team', { template: "team.html"}).
			when('/contact', { tempate: "contact.html"}).
			otherwise({ redirectTo : '/'
			})
	});

	function mainctlr($scope){

	}