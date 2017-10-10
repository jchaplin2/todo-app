var TodoItem = Backbone.Model.extend({
	validate: function(attrs) {
		if(!attrs.title)
			return "Description is required!";
	},

	toggle: function(){
		this.set("isCompleted", !this.get("isCompleted"));
	}
});