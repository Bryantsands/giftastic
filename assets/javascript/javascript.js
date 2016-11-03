var topics = ["dog", "cat", "lion", "tiger", "owl"];

for (var i = 0; i<topics.length; i++){
	var $new = $("<btn>").text(topics[i]).addClass("btn btn-primary playButton");
		$new.attr("play", topics[i]);
		$("#buttons").append($new);
}

function newButton(){
	var $new = $("<btn>").text(topics[i]).addClass("btn btn-primary newButton");
	$new.attr("play", topics[i]);
	$("#buttons").append($new);
	i++;
}

function import(item){
	var img = $("<div class = 'img'>");
	var rating = $("<p>").text("Rating:" + item.rating);
	img.prepend(rating);

	var stillImg = item.images.fixed_height_still.url;
	var animatedImg = item.images.fixed_height.url;
	var still = $("<img>").attr("src".stillImg).attr("state","still");
	stillImg.attr("stillImgURL",stillImg).attr("animatedImgURL",animatedImg);
	img.append(stillImg);
	$("#display").append(img);
}

function ajax(URL){
	$.ajax({
				url:URL,
				method:'GET'
	})
	.done(function(response){
		for(var j=0; j<10;j++){
			import(response.data[j]);
			console.log(response);
			}
		})
	
}

$(document).ready(function(){
		$(document).on("click","img",funnction(){
			var state = $(this).attr("state");
			if(state==="still"){
				$(this).attr("src",$(this).attr(animatedImgURL));
				$(this).attr("state", "animated");
			} else if (state==="animated"){
				$(this).attr("src", $(this).attr("stillImgURL"));
				$(this).attr("state","still");
			}
		});

		$(document).on("click","#new",function(){
			var put=$("#add").val().trim();
			topics.push(put);
			addButton();
			$(document).on("click",".newButton",function(){
				var animal = $(this).attr("animal");
				var queryURL=  "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
				$("#display").empty();
				ajax(queryURL);
			});
			return false;
		});
		$(document).on("click",".playButton",function(){
			$("#display").empty();
			var animal=$(this).attr("animal");
			var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
			$.ajax({
				url:queryURL,
				method:"GET"
			})
			.done(function(response){
				for(var j=0; j<10; j++){
					import(response.data[j]);
				}
			})
		});

});


















