$(document).ready(function(){
	var template = Handlerbars.compile($('#product-template').innerHTML);
	var $itemBody = $('#itemBody');
	function ajaxCall(){
		$.ajax({
			type: 'GET',
			url: '/products',
			dataType: 'json',
			success: function(products){
				$itemBody.innerHTML = template(products);
				// console.log(products);
			// 	var output;
			// 	var $itemBody = $('#itemBody');
				



			// 	$.each(products,function(i, product){
			// 		output += "<tr class='list-item'>";
			// 		output += "<td><span><h3>"+ product.name + "</h3></span>";
			// 		output += "<span>" + product.description + "</span></td>";
			// 		output += "<td><span class='label label-primary'>" + product.price + "</span></td>";
			// 		output += "<td><span id='" + product.id +"' class='glyphicon glyphicon-remove-sign'></span></td></tr>";
			// 		return output;
			// });
			// 	$itemBody.append(output);
			}
		});
	};//end of ajax call
	ajaxCall();// call a ajax function for retrice data from the server

	//when you add a new item append it to page
	var $addItemBtn = $('#add-item-btn');
	$addItemBtn.on('click', function(event){
		event.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/products',
			data: {
				'name': $('#itemName').val(),
				'description': $('#description').val(),
				'price': $('#price').val()
			}
		});
		ajaxCall();
	});

	// $('#itemBody').on('click', 'SPAN', function(event){
	// 	if(event.target.class == "glyphicon"){
	// 		console.log(event.target);
	// 	}
		
		// var parent = deleteBtn.parentElement.parentElement;
		// console.log(parent);

	})
	

});//end of main document ready