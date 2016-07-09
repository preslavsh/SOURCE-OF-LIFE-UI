System.register(['@angular/platform-browser-dynamic', './user.navigation.component', './routes', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, user_navigation_component_1, routes_1, common_1, common_2;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (user_navigation_component_1_1) {
                user_navigation_component_1 = user_navigation_component_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(user_navigation_component_1.UserNavigationComponent, [
                routes_1.APP_ROUTER_PROVIDERS,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: common_2.APP_BASE_HREF, useValue: '/' }
            ]);
        }
    }
});
