$(document).ready(function(){
	var todoItems = new TodoItems([
		new TodoItem({ id: 1, title: "TodoItem 1"}),
		new TodoItem({ id: 2, title: "TodoItem 2"}),
		new TodoItem({ id: 3, title: "TodoItem 3"})
	]);

	var todoItemsView = new TodoItemsView({ model: todoItems});
	$("body").append(todoItemsView.render().$el);
});