$(function() {
    
    var dashboardComponent1 = new DashboardComponentView({tagName: $("#component11"), model: myDashboard.at(0)});
    var dashboardComponent2 = new DashboardComponentView({tagName: $("#component12"), model: myDashboard.at(1)});
    var dashboardComponent3 = new DashboardComponentView({tagName: $("#component13"), model: myDashboard.at(2)});

    var dashboardComponent4 = new DashboardComponentView({tagName: $("#component21"), model: myDashboard.at(3)});
    var dashboardComponent5 = new DashboardComponentView({tagName: $("#component22"), model: myDashboard.at(4)});
    var dashboardComponent6 = new DashboardComponentView({tagName: $("#component23"), model: myDashboard.at(5)});

    var dashboardComponent7 = new DashboardComponentView({tagName: $("#component31"), model: myDashboard.at(6)});
    var dashboardComponent8 = new DashboardComponentView({tagName: $("#component32"), model: myDashboard.at(7)});
    var dashboardComponent9 = new DashboardComponentView({tagName: $("#component33"), model: myDashboard.at(8)});

    window.dashboardComponent1 = dashboardComponent1;
    window.dashboardComponent2 = dashboardComponent2;

    dashboardComponent1.render();
    dashboardComponent2.render();
    dashboardComponent3.render();
    dashboardComponent4.render();
    dashboardComponent5.render();
    dashboardComponent6.render();
    dashboardComponent7.render();
    dashboardComponent8.render();
    dashboardComponent9.render();
});

