// Custom Javascript to use the NYT API

$(document).ready(function(){

// copied from the NYT API Documentation

var searchTerm;
// console.log(searchTerm);

	console.log("nytimes search")

	$('#search-button').click(function() { 
		event.preventDefault();
		searchTerm = $('#search-term').val();
		console.log(searchTerm);
		articleSearch();
	});

	function articleSearch() {

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({
		  'api-key': "be0c4c568c9e4f62ab24e5b17f92bb97",
		  'q': searchTerm,
			});
		$.ajax({
		  url: url,
		  method: 'GET',
			}).done(function(result) {

		  		var response = result.response.docs;

		  		console.log(response);

		  		

		  		for (var i = 0; i < response.length; i++) {

		  			var headline = response[i].headline.main;
			  		var link = response[i].web_url;
			  		var snip = response[i].snippet;
			  		//var byLine = response[i].byline.original;
		  			var articleDiv = $('<div>');


		  			$(articleDiv).append(headline, link, snip);
		  			$('#search-results').append(articleDiv);

		  		}


			}).fail(function(err) {
		  		throw err;
			});

	}

});