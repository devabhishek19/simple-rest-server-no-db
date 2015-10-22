var productApp = anugular.module('productApp.controller',[])
.controller('productctlr', function($scope, $http){
	$http.get('/products').success(function(data, status, header, config){
		$scope.productData = data;
		console.log(data);
	})

})