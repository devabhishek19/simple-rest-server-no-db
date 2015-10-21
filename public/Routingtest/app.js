angular.module('testingApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: "/",
			template: "<h1>Home</h1>"
			// templateUrl: 'templates/home.html'
		})
		.state('home.detail',{
			url: '/home.detail',
			templateUrl: 'templates/home_detail.html'
		})
		.state('product',{
			url: '/products',
			templateUrl: 'templates/products.html'
		})

	
}]);