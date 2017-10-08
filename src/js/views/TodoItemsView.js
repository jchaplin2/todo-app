var TodoItemsView = Backbone.View.extend({
	tagName: "ul",

	id: "todoItems",

	initialize: function(options){
		if(!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("add", this.onAddTodoItem, this);
	},

	onAddTodoItem: function(todoItem) {
		var view = new TodoItemView({ model: todoItem});
		this.$el.append(view.render().$el);
	},

	events: {
		"click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},

	onClickAdd: function() {
		var $newItemTextBox = this.$("#newTodoItem");
		var $newItemTextBoxVal = $newItemTextBox.val();

		if($newItemTextBoxVal !== "") {
			var todoItem = new TodoItem({ title: $newItemTextBox.val() });
			this.model.add(todoItem);
			$newItemTextBox.val("");
		}
	},

	onKeyPress: function(e) {
		if(e.keyCode === 13) {
			this.onClickAdd();
		}
	},


	render: function() {
		var self = this;

		this.$el.append("<input type='text' autofocus id='newTodoItem' ></input>");
		this.$el.append("<button id='add'> Add </button>");

		this.model.each(function(todoItem) {
			var view = new TodoItemView({ model: todoItem});
			self.$el.append(view.render().$el);
		});
		return this;
	}
});