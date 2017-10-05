$(document).ready(function(){
	var todoItem = new TodoItem({ description: "TodoItem 1"});

	var todoItemView = new TodoItemView({ model: todoItem });
	$("body").append(todoItemView.render().$el);
});