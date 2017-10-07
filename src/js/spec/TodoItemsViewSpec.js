describe("TodoItemsView", function(){
	var todoItems;
	var todoItemsView;

	beforeEach(function(){
		todoItems = new TodoItems([]);
		todoItemsView = new TodoItemsView({ model: todoItems});
	});

	it("should increase the size of the list by 1.", function(){
		todoItemsView.onClickAdd();

		expect(todoItemsView.model.length).toEqual(1);
	});

});