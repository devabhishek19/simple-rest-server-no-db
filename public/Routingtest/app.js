var testingApp = angular.module('testingApp', ['ui-router'])
.config([$urlRouterProvider, $stateProvider, function($urlRouterProvider, $stateProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
		})
		.state('home.detail',{
			url: '/home.detail',
			templateUrl: 'templates/home_detail.html'
		})
		.state('product',{
			url: '/products',
			templateUrl: 'templates/products.html'
		})

	$urlRouterProvider('', '/');
}])