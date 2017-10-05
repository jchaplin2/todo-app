var TodoItem = Backbone.Model.extend({
	validate: function(attrs) {
		if(!attrs.title)
			return "Description is required!";
	}
});