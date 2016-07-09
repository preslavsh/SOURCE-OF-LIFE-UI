System.register(['@angular/core', '@angular/router', "./notification.component", "./plants.component", "./greenhouse.component", "./shop.component", "./data.component", "./plant-detail.component", "./greenhouse-selection.component", "./shop-plant-detail.component", "./shop-other-detail.component", "./buy-form.component"], function(exports_1, context_1) {
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
    var core_1, router_1, notification_component_1, plants_component_1, greenhouse_component_1, shop_component_1, data_component_1, plant_detail_component_1, greenhouse_selection_component_1, shop_plant_detail_component_1, shop_other_detail_component_1, buy_form_component_1;
    var UserNavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (notification_component_1_1) {
                notification_component_1 = notification_component_1_1;
            },
            function (plants_component_1_1) {
                plants_component_1 = plants_component_1_1;
            },
            function (greenhouse_component_1_1) {
                greenhouse_component_1 = greenhouse_component_1_1;
            },
            function (shop_component_1_1) {
                shop_component_1 = shop_component_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (plant_detail_component_1_1) {
                plant_detail_component_1 = plant_detail_component_1_1;
            },
            function (greenhouse_selection_component_1_1) {
                greenhouse_selection_component_1 = greenhouse_selection_component_1_1;
            },
            function (shop_plant_detail_component_1_1) {
                shop_plant_detail_component_1 = shop_plant_detail_component_1_1;
            },
            function (shop_other_detail_component_1_1) {
                shop_other_detail_component_1 = shop_other_detail_component_1_1;
            },
            function (buy_form_component_1_1) {
                buy_form_component_1 = buy_form_component_1_1;
            }],
        execute: function() {
            UserNavigationComponent = (function () {
                function UserNavigationComponent() {
                }
                UserNavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'sg-user-navigation-component',
                        templateUrl: './templates/user.navigation.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        precompile: [notification_component_1.NotificationComponent, plants_component_1.PlantsComponent, greenhouse_component_1.GreenHouseComponent, shop_component_1.ShopComponent,
                            data_component_1.DataComponent, plant_detail_component_1.PlantDetailComponent, greenhouse_selection_component_1.GreenHouseSelectionComponent, shop_plant_detail_component_1.ShopPlantDetailComponent,
                            shop_other_detail_component_1.ShopOtherDetailComponent, buy_form_component_1.BuyFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserNavigationComponent);
                return UserNavigationComponent;
            }());
            exports_1("UserNavigationComponent", UserNavigationComponent);
            ;
        }
    }
});
