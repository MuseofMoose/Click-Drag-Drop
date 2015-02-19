// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var isClicked = false;
var currentItemId = -1;
var z_max=1;


var ready = function(){


	$('.options_bar').hide();
	$('body').on('mouseenter','.image', function(){
		$(this).closest("td").siblings().children(".options_bar").slideDown();
		// $(this).children('img').css("width", "330");
	});

	$('body').on('mouseleave','tr', function(){
		$(this).children().children(".options_bar").slideUp();
		// $(this).children().children('img').css("width", "321");
	});

	var startleft;
	var starttop;

	//Defines the mouse depress event.
	$('body').on('mousedown','tr', function(){
		$(this).css('position','absolute');

		var bound = $(this).position();

		startleft=bound.left;
		starttop=bound.top;

		//Makes sure the clicked item has the highest z-index.
		$(this).css('z-index',++z_max);

		$(this).children('.image').children().toggleClass('clicked');

		isClicked = true;
		currentItemId = $(this).attr('id');
		// console.log(isClicked);
	});

	//Defines the mouse release event.
	$('body').on('mouseup','tr', function(){
		// $(this).css('position','relative');
		if(isClicked===true){
			$(this).children('.image').children().toggleClass('clicked');

			// console.log($(this).css('z-index'));
			isClicked = false;
			currentItemId = -1;
			// console.log(isClicked);
		}
	});

	//Defines mouse movement while clicked.
    $('body').on('mousemove',function(event) {
    	if(isClicked===true){
	    	var itemInFocus = "tr#" + currentItemId;
    		// console.log(itemInFocus);

    		var diffx = (event.pageX+startleft);
    		console.log(diffx);
    		var diffy = (event.pageY+starttop);
    		console.log(diffy);


    		$(itemInFocus).css('left', (event.pageX-160));
    		$(itemInFocus).css('top', (event.pageY-160));
   		};
   	});




	$('body').on('click', '.new_pic_button', function(e){
		e.preventDefault();

		var formstart='<form class="new_picture" id="new_picture" enctype="multipart/form-data" action="/pictures" accept-charset="UTF-8" method="post">'+
						'<input name="utf8" type="hidden" value="✓">'

   			   var formtitle='<h3 class="formhead">New Picture</h3>'

			   var div1='<div class="field">' +
				    		'<input type="text" name="picture[title]" id="picture_title">'+
				  		'</div>'

			   var div2='<div class="field">' +
				    		'<input type="file" name="picture[media]" id="picture_media">' +
				    		'<input type="hidden" name="picture[media_cache]" id="picture_media_cache">' +
				  		'</div>'

			   var div3='<div class="actions">' +
				    		'<input type="submit" name="commit" value="Create Picture" class="ajax_trigger_new">' +
				  		'</div>'
		var formend='</form>'

		var new_form = "<div class='new_popup'>" + formstart + formtitle + div1 + div2 + div3 + formend + "</div>";

		$('body').append(new_form);
	});

	//Resets pictures to default static positioning and color formatting.
	$('body').on('click','#clean_up', function(){
		$('tr').css('position','static');
		$('img').removeClass('clicked');
	});

	// $('body').on('click', '.ajax_trigger_new', function(e){
	// 	e.preventDefault();

	// 	// var new_id;
	// 	// var image_name = ($('#picture_media').val()).replace('C:\\fakepath\\','');

	// 	// $.ajax({type: "GET", url:'/pictures/', dataType: "JSON", success: function(data){ //Reads in the product page index json...
	// 	// 		var tablerow = data[data.length-1];
	// 	// 		new_id = tablerow['id']+1;
	// 	// }});


	// 	// // $.ajax({
	// 	// // 	type: "POST",
	// 	// // 	url: '/pictures/',
	// 	// // 	data: {"title":"Random","url":"http://localhost:3000/pictures/"+new_id+".json","media":{"media":{"url":"/uploads/picture/media/"+new_id+"/"+image_name}}},
	// 	// // 	success: function(){
	// 	// // 	},
	// 	// // 	error: function(request,error){
	// 	// // 		console.log(arguments);
	// 	// // 	}
	// 	// // });
	// });



};

//Makes turbolinks work without having to refresh the page.
$(document).ready(ready);
$(document).on('page:load', ready);