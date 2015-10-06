$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'product.json',
		dataType: 'json',
		success: function(products){
			console.log(products);
			var output;
			var $itemBody = $('#itemBody');
			$.each(products,function(i, product){
				output += "<tr class='list-item'>";
				output += "<td><span><h3>"+ product.name + "</h3></span>";
				output += "<span>" + product.description + "</span></td>";
				output += "<td><span class='label label-primary'>" + product.price + "</span></td>";
				output += "<td><span class='glyphicon glyphicon-remove-sign'></span></td></tr>";
				return output;
			});
			$itemBody.append(output);
		}
	});//end of ajax call
});//end of main document ready