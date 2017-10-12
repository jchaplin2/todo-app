var TodoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options) {
		if(!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("change", this.render, this);
	},

	events: {
		"click .toggle": "onClickToggle"
	},

	onClickToggle: function() {
		this.model.toggle();
	},

	render: function(){
		this.$el.toggleClass("completed", this.model.get("isCompleted"));

		var checked = this.model.get("isCompleted") ? "checked" : "";
		this.$el.html("<input type='checkbox' class='toggle'"  + checked + "  > </input>" + this.model.escape("title"));

		return this;
	}
});