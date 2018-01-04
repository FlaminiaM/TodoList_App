//add click listener to the li so that if we click there is a linethrough and it turns gray

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//when you click on X it fades out and delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this now is the LI
	})
	event.stopPropagation(); //it prevents the event to bubble up to other elements 
});

//Creation of new todos that add new todo by click enter

$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			//grab new todo text from input
			var todoText = $(this).val();
			$(this).val("");
			//create a new li and add to ul 
			$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li");
		}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});