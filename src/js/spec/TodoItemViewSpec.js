describe("TodoItemView", function(){
	var view;
	var model;

	beforeEach(function(){
		model = new TodoItem();
		view = new TodoItemView({model: model});
		view.render();
	});

	it("tagName should be li.", function(){
		expect(view.tagName).toEqual("li");
	});

});