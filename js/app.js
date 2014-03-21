$(document).ready(function() {
	// ADD ITEM
	$("#addButton").click(function() {
        var item = ($('#addItem').val());
        $('#shopList').append("<li class='item'><i class='fa fa-square-o unchecked'></i>"+item+"<i class='fa fa-trash-o'></i>");
    }); // closes add item function


    // CHECK ITEM
    $("i").click(function(){
		if ($(this).hasClass('unchecked')) {
			$(this).removeClass('fa-square-o').addClass('fa-check-square-o');
			$(this).parent().addClass('checked');
		}
	}); // closes completed item function


	// TRASH ITEM
	$(".fa-trash-o").click(function(){
		$(this).parent().remove();
	}); // deletes list item

	
	
	// CLEAR ALL ITEMS
	$(".reset").click(function() {
		$("li").remove();
	}); // clears all list items


}); // close document ready function