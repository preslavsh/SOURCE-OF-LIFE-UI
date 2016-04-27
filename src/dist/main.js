System.register(['angular2/core', 'angular2/platform/browser', './user.navigation.component', 'angular2/router', 'angular2/platform/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, user_navigation_component_1, router_1, common_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (user_navigation_component_1_1) {
                user_navigation_component_1 = user_navigation_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(user_navigation_component_1.UserNavigationComponent, [
                core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
                router_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]);
        }
    }
});
