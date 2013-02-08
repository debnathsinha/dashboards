var DashboardComponentModel = Backbone.Model.extend({
	defaults: function() {
	    return {
		metadata: { yaxis: { max: 3 }, label: 'Foo' },
		data: [ [[0, 0], [1, 2]], [[1,1], [2,2]] ]
	    }
	},
	initialize: function() {
	    if(!this.get("data")) {
		this.set({ "data": this.defaults().data });
	    }
	    if(!this.get("metadata")) {
		this.set({ "metadata": this.defaults().metadata });
	    }
	}
});

