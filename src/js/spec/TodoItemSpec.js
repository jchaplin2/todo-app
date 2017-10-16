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

	it("urlRoot should be https://jsonplaceholder.typicode.com/todos", function(){
		expect(todoItem.urlRoot).toEqual("https://jsonplaceholder.typicode.com/todos");
	});

});