var DashboardComponentView = Backbone.View.extend({
	render: function() {
	    $.plot(this.tagName, this.model.get("data"), this.model.get("metadata"));
	},
	events: {
	    
	},
	initialize: function() {
	    this.listenTo(this.model, "change", this.render);
	}
});

