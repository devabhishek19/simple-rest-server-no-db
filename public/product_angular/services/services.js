var data = angular.module('data', [])
.factory('datafctry', function(){
	return{
		people:[
			{	name: 'person1',
				email: 'person1@hotmail.com'
			},
			{
				name: 'person2',
				email: 'person2@hotmail.com'
			},
			{
				name: 'person3',
				email: 'person3@hotmial.com'
			}
		]
		
	}
})