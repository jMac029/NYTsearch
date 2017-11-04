// Custom Javascript to use the NYT API

// copied from the NYT API Documentation

//var searchTerm = $('#searchTerm').val().trim();



$('#search-button').click(function() { 
	event.preventDefault();
	

});

function articleSearch() {

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	url += '?' + $.param({
	  'api-key': "be0c4c568c9e4f62ab24e5b17f92bb97",
	  'q': "Anaheim Ducks" // searchTerm
		});
	$.ajax({
	  url: url,
	  method: 'GET',
		}).done(function(result) {

	  		var response = result.response.docs;

	  		console.log(response);

	  		

		}).fail(function(err) {
	  		throw err;
		});
		
}