$(document).ready(function(){
	
	var $itemBody = $('#itemBody');
	var $addItemBtn = $('#add-item-btn');

	var templateData = $('#product-template').html(); //get the html of our template
	var template = Handlebars.compile(templateData); //compile the templatedata

	function ajaxCall(){
		$.getJSON('/products', function(data){
			$.each(data, function(i, product){				
				var html = template(product); //pass the data to template
				$itemBody.append(html); //append it to the div or element
			});
		});
	}; //end of ajax call

	ajaxCall();// call a ajax function for retrice data from the server

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
				var html = template(newProduct);
				$itemBody.append(html);	
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
	});	

});//end of main document ready