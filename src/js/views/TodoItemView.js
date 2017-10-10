var TodoItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function(options) {
		if(!(options && options.model))
			throw new Error("model is not specified.");
	},

	events: {
		"click .toggle": "onClickToggle"
	},

	onClickToggle: function() {
		this.model.toggle();
	},

	render: function(){
		this.$el.html("<input type='checkbox' name='toggle' /> " + this.model.escape("title"));

		return this;
	}
});