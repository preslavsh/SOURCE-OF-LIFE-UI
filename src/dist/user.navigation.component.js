System.register(['angular2/core', 'angular2/router', "./plant-detail.component", "./greenhouse-selection.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, plant_detail_component_1, greenhouse_selection_component_1;
    var UserNavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (plant_detail_component_1_1) {
                plant_detail_component_1 = plant_detail_component_1_1;
            },
            function (greenhouse_selection_component_1_1) {
                greenhouse_selection_component_1 = greenhouse_selection_component_1_1;
            }],
        execute: function() {
            UserNavigationComponent = (function () {
                function UserNavigationComponent() {
                }
                UserNavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'sg-user-navigation-component',
                        templateUrl: "./templates/user.navigation.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        new router_1.AsyncRoute({
                            path: '/notification',
                            loader: function () { return System.import('dist/notification.component').then(function (m) { return m.NotificationComponent; }); },
                            name: 'Notification',
                            useAsDefault: true
                        }),
                        new router_1.AsyncRoute({
                            path: '/plants',
                            loader: function () { return System.import('dist/plants.component').then(function (m) { return m.PlantsComponent; }); },
                            name: 'Plants',
                        }),
                        new router_1.AsyncRoute({
                            path: '/greenhouse',
                            loader: function () { return System.import('dist/greenhouse.component').then(function (m) { return m.GreenHouseComponent; }); },
                            name: 'GreenHouse'
                        }),
                        new router_1.AsyncRoute({
                            path: '/data',
                            loader: function () { return System.import('dist/data.component').then(function (m) { return m.DataComponent; }); },
                            name: 'Data'
                        }),
                        new router_1.AsyncRoute({
                            path: '/shop',
                            loader: function () { return System.import('dist/shop.component').then(function (m) { return m.ShopComponent; }); },
                            name: 'Shop'
                        }),
                        {
                            path: '/detail/:en_name',
                            name: 'PlantDetail',
                            component: plant_detail_component_1.PlantDetailComponent
                        },
                        {
                            path: '/selection/:en_name',
                            name: 'GreenhouseSelection',
                            component: greenhouse_selection_component_1.GreenHouseSelectionComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], UserNavigationComponent);
                return UserNavigationComponent;
            }());
            exports_1("UserNavigationComponent", UserNavigationComponent);
        }
    }
});
