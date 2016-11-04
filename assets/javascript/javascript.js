$(document).ready(function(){

var topics = ["dog", "cat", "lion", "tiger", "owl"];
console.log(topics);
for (var i = 0; i<topics.length; i++){
	var $new = $("<btn>").text(topics[i]).addClass("btn btn-primary playButton");
		$new.attr("data-name", topics[i]);
		$("#buttons").append($new);
		console.log($new)
};


function newButton(){
	var $new = $("<btn>").text(topics[i]).addClass("btn btn-primary newButton");
	$new.attr("data-name", topics[i]);
	$("#buttons").append($new);
	i++;
};





		$("<img>").on("click",function(){
			var state = $(this).attr("state");
			if(state==="still"){
				$(this).attr("src",$(this).attr("animatedImgURL"));
				$(this).attr("state", "animated");
			} else if (state==="animated"){
				$(this).attr("src", $(this).attr("stillImgURL"));
				$(this).attr("state","still");
			}
		});

		$("#new").on("click",function(){
			var put=$("#add").val().trim();
			topics.push(put);
			newButton();
			$(document).on("click",".newButton",function(){
				var animal = $(this).attr("animal");
				var queryURL=  "http://api.giphy.com/v1/gifs/search?q=" + " " +"&api_key=dc6zaTOxFJmzC";
				$("#display").empty();
				ajax(queryURL);
				console.log(animal)
			});
			return false;
		});
		$(document).on("click",".playButton",function(){
			$("#display").empty();

			// var img = $("<div class = 'img'>");
			// var rating = $("<p>").text("Rating:");
			// img.prepend(rating);
			

			// var stillImg = fixed_height_still.url;
			// var animatedImg = fixed_height.url;
			// var still = $("<img>").attr("src".stillImg).attr("state","still");
			// stillImg.attr("stillImgURL",stillImg).attr("animatedImgURL",animatedImg);
			// img.append(stillImg);
			// $("#display").append(img);


			var animal=$(this).data("name");
			console.log(this)
			var queryURL= "http://api.giphy.com/v1/gifs/search?q=" + " " +"&api_key=dc6zaTOxFJmzC";
			$.ajax({
				url:queryURL,
				method:"GET"
			})
			.done(function(response){
				for(var j=0; j<10; j++){
					console.log(response.data[j]);
				}

			})
		});


});


















