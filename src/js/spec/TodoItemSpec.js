describe("TodoItem", function(){
	var todoItem;

	beforeEach(function(){
		todoItem = new TodoItem();
	});

	it("title is required", function(){
		expect(todoItem.isValid()).toBeFalsy();

		todoItem.set("title", "wake up in the morning.");

		expect(todoItem.isValid()).toBeTruthy();
	});

});