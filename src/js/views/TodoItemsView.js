var TodoItemsView = Backbone.View.extend({

	tagName: "main",

	className: "todo-main",

	initialize: function(options){
		if(!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("add", this.onAddTodoItem, this);
		this.model.on("remove", this.onRemoveTodoItem, this);
	},

	onRemoveTodoItem: function(todoItem) {
		this.$("li#" + todoItem.id).remove();
	},

	onAddTodoItem: function(todoItem) {
		var view = new TodoItemView({ model: todoItem});
		this.$("#todoItems").append(view.render().$el);
	},

	events: {
		"keypress #newTodoItem": "onKeyPress"
	},

	onClickAdd: function() {
		var $newItemTextBox = this.$("#newTodoItem");
		var $newItemTextBoxVal = $newItemTextBox.val();

		if($newItemTextBoxVal !== "") {
			var todoItem = new TodoItem({ title: $newItemTextBox.val() });
			this.model.create(todoItem);
			$newItemTextBox.val("");
		}
	},

	onKeyPress: function(e) {
		if(e.keyCode === 13) {
			this.onClickAdd();
		}
	},

	render: function() {
		var template = $("#todoItemsTemplate").html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
	}
});