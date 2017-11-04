// Custom Javascript to use the NYT API

// copied from the NYT API Documentation

//var searchTerm = $('#searchTerm').val().trim();



$('#search-button').click(function() { 
	event.preventDefault();
	articleSearch();

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

	  		var response = result.response.docs[i];

	  		console.log(response);

	  		var headline = response.headline.main;
	  		var link = response.web_url;
	  		var snip = response.snippet;
	  		var byLine = response.byline.original;

	  		for (var i = 0; i < response.length; i++) {
	  			var articleDiv = $('<div>');


	  			$(articleDiv).append(headline, snip, byLine);
	  			$('#search-results').append(articleDiv);

	  		}


		}).fail(function(err) {
	  		throw err;
		});

}