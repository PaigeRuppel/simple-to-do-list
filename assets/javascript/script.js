$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todo = $(this).val();
		$("ul").append(newTodo(todo));
		$(this).val("");
	}
});


function newTodo(todo) {
	return "<li><span><i class='fa fa-window-close'></i></span> " + todo + "</li>";
}

$("#toggleInput").on("click", function() {
	$("input[type='text']").fadeToggle();
})