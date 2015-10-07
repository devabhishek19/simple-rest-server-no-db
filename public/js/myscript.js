$(document).ready(function(){

	var $itemBody = $('#itemBody');
	var $addItemBtn = $('#add-item-btn');

		$.ajax({
			type: 'GET',
			url: '/products',
			dataType: 'json',
			success: function(products){
				var output;
				$.each(products,function(i, product){
					output += "<tr class='list-item'>";
					output += "<td><span><h3>"+ product.name + "</h3></span>";
					output += "<span>" + product.description + "</span></td>";
					output += "<td><span class='label label-primary'>" + product.price + "</span></td>";
					output += "<td><span data-id='" + product.id +"' class='glyphicon glyphicon-remove-sign'></span></td></tr>";
					return output;
				});
			$itemBody.append(output);
			}
		});

	//when you add a new item append it to page
	
	$addItemBtn.on('click', function(event){
		event.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/products',
			data: {
				'name': $('#itemName').val(),
				'description': $('#description').val(),
				'price': $('#price').val()
			},
			success: function(newProduct){
				var output;
					output += "<tr class='list-item'>";
					output += "<td><span><h3>"+ newProduct.name + "</h3></span>";
					output += "<span>" + newProduct.description + "</span></td>";
					output += "<td><span class='label label-primary'>" + newProduct.price + "</span></td>";
					output += "<td><span data-id='" + newProduct.id +"' class='glyphicon glyphicon-remove-sign'></span></td></tr>";
				$itemBody.append(output);	
			}
		});
		$('#addItemForm').trigger('reset');
	});

	//event to remove the element or table row
	$itemBody.delegate('.glyphicon-remove-sign','click', function(){
		var $tr = $(this).closest('tr');
		$.ajax({
			type: "DELETE",
			url: '/products/' + $(this).attr('data-id'),
			success: function(){
				$tr.remove();
			}
		});
	}); // end of deletation 

});//end of main document ready