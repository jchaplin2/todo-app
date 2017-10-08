describe("TodoItemsView", function(){
	var todoItems;
	var todoItemsView;
	var length;
	var newLength;

	beforeEach(function(){
		todoItems = new TodoItems([]);
		todoItemsView = new TodoItemsView({ model: todoItems});
		length = todoItemsView.model.length;
		$(document.body).append('<input id="#newTodoItem" type="text" />');
	});

	it("should increase the size of the list by 1.", function(){
		$("#newTodoItem").val("test");
		todoItemsView.onClickAdd();
		var newLength = todoItemsView.model.length;
		expect(length + 1).toEqual(newLength);
	});

	it("should prevent adding entries if there is no description.", function(){
		todoItemsView.onClickAdd();
		newLength = todoItemsView.model.length;
		expect(length).not.toEqual(newLength);
	});

});