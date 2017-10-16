describe("TodoItems", function(){
	var todoItems = new TodoItems();

	it("urlRoot should be https://jsonplaceholder.typicode.com/todos", function(){
		expect(todoItems.url).toEqual("https://jsonplaceholder.typicode.com/todos");
	});
});