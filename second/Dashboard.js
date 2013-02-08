    var Dashboard = Backbone.Collection.extend({
	model: DashboardComponentModel
    });

    var myDashboard = new Dashboard;
    myDashboard.add([
    	new DashboardComponentModel({data: [ [[0, 0], [1, 2]], [[1,1], [2,2]] ]}),
    	new DashboardComponentModel({data: [ [[0, 0], [1, 2]], [[1,1], [2,2]] ]}),
    	new DashboardComponentModel({data: [ [[1, 0], [1, 2]], [[1,1], [2,2]] ]}),
    	new DashboardComponentModel({data: [ [[0, 0], [1, 1]], [[2,1], [2,2]] ]}),
    	new DashboardComponentModel({data: [ [[0, 0], [1, 2]], [[1,1], [2,2]] ]}),
    	new DashboardComponentModel({data: [ [[0, 0], [3, 2]], [[3,1], [2,2]] ]}),
    	new DashboardComponentModel({data: [ [[0, 0], [1, 2]], [[1,1], [2,2]] ]}),
    	new DashboardComponentModel({metadata: { yaxis: { max: 3 } }}),
    	new DashboardComponentModel({metadata: { yaxis: { max: 5 } }})
    ]);

    window.myDashboard = myDashboard;

