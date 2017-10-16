describe("TodoItemView", function(){
	var view;
	var model;

	beforeEach(function(){
		model = new TodoItem();
		view = new TodoItemView({model: model});
	});

	it("tagName should be li.", function(){
		expect(view.tagName).toEqual("li");
	});

	it("click toggle should change the completed status.", function(){
		view.onClickToggle();
		var completed = view.model.get("completed");

		expect(completed).toBeTruthy();
	});

	it("click toggle should change item class name.", function(){
		view.onClickToggle();
		var eltClassName = view.el.getAttribute("class");

		expect(eltClassName).toBeTruthy("completed");
	});

	it("destroy the model when called.", function(){
		spyOn(model, "destroy");
		
		view.render();

		view.$el.find(".delete")[0].click();

		expect(model.destroy).toHaveBeenCalled();
	});

});