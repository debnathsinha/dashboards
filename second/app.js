var AppView = Backbone.View.extend({
	el: $("#todoapp"),
	render: function() {
	    console.log("Helllo world");
	}
});

var App = new AppView;
