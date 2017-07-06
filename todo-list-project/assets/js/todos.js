//check off specific todos by clicking
//you can only add a listener on elements that exists when it runs the first time. 
//so it needs to be on document, or ul parent. 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed"); 
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() { //add fadeOut animation
		$(this).remove(); //will give us parent element to remove. oh baby. need callback to complete fadeout
	}); 
	event.stopPropagation(); //will stop event bubbling
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//get new todo text from input
		var todoText = $(this).val(); 
		//create new li and add to ul (append)
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>"); 
		//clear input field
		$(this).val(""); 
	}
	 
});

$(".fa-pencil").click(function() {
	$("input[type='text']").fadeToggle(); 
});