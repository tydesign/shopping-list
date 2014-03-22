$(document).ready(function() {

	// =========================
	// CREATE CHECKITEM FUNCTION
	function checkItem () {
		$("#shopList li i").click(function(){
			if ($(this).hasClass('unchecked')) {
				$(this).removeClass('fa-square-o unchecked').addClass('fa-check-square-o');
				$(this).parent().removeClass('unchecked').addClass('checked');
			}
			else {
				if ($(this).parent().hasClass('checked')) {
				$(this).parent().removeClass('checked').addClass('unchecked');
				$(this).removeClass('fa-check-square-o').addClass('fa-square-o');
				}
			}
		}); // closes completed item function

	// RUN CHECKITEM
	$(document).checkItem();

	// ADD ITEM
	$("#addButton").click(function() {
        var item = ($('#addItem').val());
        $('#shopList').append("<li><i class='fa fa-square-o unchecked'></i>"+item+"<i class='fa fa-trash-o'></i>");
        checkItem (this);
    }); // closes add item function

	// TRASH ITEM
		$(".fa-trash-o").click(function(){
			$(this).parent().remove();
			}); // deletes list item
	} // closes checkItem function

	
	//================
	// CLEAR ALL ITEMS
	$(".reset").click(function() {
		$("li").remove();
	}); // clears all list items


}); // close document ready function