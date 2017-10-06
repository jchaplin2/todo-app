$(document).ready(function(){
	var todoItems = new TodoItems([
		new TodoItem({ title: "TodoItem 1"}),
		new TodoItem({ title: "TodoItem 2"}),
		new TodoItem({ title: "TodoItem 3"})
	]);

	var todoItemsView = new TodoItemsView({ model: todoItems});
	$("body").append(todoItemsView.render().$el);
});