//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "27 sep 2020 16:05:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
