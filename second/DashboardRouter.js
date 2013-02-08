var DashboardRouter = Backbone.Router.extend({

    routes: {
	"index" : "showDefault",
	"dashboard/:id" : "getDashboard",
	"component/:id" : "getDashboardComponent"
    },

    showDefault : function() {
	console.log("Showing default");
    },

    getDashboard: function(dashboardId) {
	console.log("Getting dashboard " + dashboardId);
    },

    getDashboardComponent : function(componentId) {
	console.log("Getting dashboard component " + componentId);
    }
});

var myDashboardRouter = new DashboardRouter();
window.myDashboardRouter = myDashboardRouter;

Backbone.history.start();