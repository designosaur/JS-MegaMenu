$(document).ready(function(){
	$('#megamenu').append('<div id="hiddenmenu"><ul><li></li></ul><img src=""https://cdn2.bigcommerce.com/n-arxsrf/p1qyb/product_images/uploaded_images/whitepixel.jpg""></div>');
	$('#hiddenmenu').attr("display","inline");
	$('#hiddenmenu').hide();
	$('#megamenu > ul > li').mouseover(function() {
		var imgName = $(this).children('a').html().substr(0,4).toLowerCase();
		var imgName = imgName.replace(" ","");
		console.log(imgName);
		if (imgName != "") {
			$('#hiddenmenu > img').attr('src',"https://cdn2.bigcommerce.com/n-arxsrf/p1qyb/product_images/uploaded_images/" + imgName + "-menu.jpg");
		}
		var content = $(this).children('ul').html();
		$('#hiddenmenu ul').html(content);
		$('#hiddenmenu').show();
	});

	$('#megamenu').mouseleave(function(){
		$('#hiddenmenu').hide();
	})

});