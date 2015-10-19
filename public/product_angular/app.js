var app = angular.module('productApp', ['ui.router', 'product'])
.config(['$urlRouterProvider', '$stateProvider'], function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
		})
		.state('about', {
			url:'/about',
			templateUrl:'templates/about.html'
		})
})