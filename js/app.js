$(document).ready(function() {

	// CREATE CHECKITEM FUNCTION
	function checkItem() {
		// CHECK ITEM TOGGLE
		$("i").on('click','.checkbox', function(){
			if ($(this).parent().hasClass('unchecked') !== $(this).hasClass('fa-trash-o')) {
				$(this).removeClass('fa-square-o').addClass('fa-check-square-o');
				$(this).parent().removeClass('unchecked').addClass('checked');
			}
			else {
				if ($(this).parent().hasClass('checked')) {
				$(this).parent().removeClass('checked').addClass('unchecked');
				$(this).removeClass('fa-check-square-o').addClass('fa-square-o');
				}
			}
		}); // closes completed item function


		// TRASH ITEM
		$(".fa-trash-o").click(function(){
			$(this).parent().remove();
		}); // deletes list item
	}

	checkItem();

	// ADD ITEM
	$("#addButton").click(function() {
        checkItem();
        var item = ($('#addItem').val());
        $('#shopList').append("<li class='unchecked'><i class='fa fa-square-o'></i>"+item+"<i class='fa fa-trash-o'></i></li>");
        checkItem();
    }); // closes add item function



	
	// CLEAR ALL ITEMS
	$(".reset").click(function() {
		$("li").remove();
	}); // clears all list items


}); // close document ready function