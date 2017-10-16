var TodoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options) {
		if(!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("change", this.render, this);
	},

	events: {
		"click .toggle": "onClickToggle",
		"click .delete": "onClickDelete"
	},

	onClickDelete: function() {
		this.model.destroy();
	},

	onClickToggle: function() {
		this.model.toggle();
	},

	render: function(){
		this.$el.attr("id", this.model.id);
		this.$el.toggleClass("completed", this.model.get("completed"));

		var checked = this.model.get("completed") ? "checked" : "";
		this.$el.html("<input type='checkbox' class='toggle'"  + checked + "  > </input>" + this.model.escape("title") + "<button class='delete' > Delete </button>");

		return this;
	}
});