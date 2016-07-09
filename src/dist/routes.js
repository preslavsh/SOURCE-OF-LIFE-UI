System.register(["./notification.component", "./plants.component", "./greenhouse.component", "./shop.component", "./data.component", "./plant-detail.component", "./greenhouse-selection.component", "./shop-plant-detail.component", "./shop-other-detail.component", "./buy-form.component", "@angular/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var notification_component_1, plants_component_1, greenhouse_component_1, shop_component_1, data_component_1, plant_detail_component_1, greenhouse_selection_component_1, shop_plant_detail_component_1, shop_other_detail_component_1, buy_form_component_1, router_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                {
                    path: '',
                    redirectTo: '/notification',
                    pathMatch: 'full'
                },
                {
                    path: 'notification',
                    component: notification_component_1.NotificationComponent,
                },
                {
                    path: 'plants',
                    component: plants_component_1.PlantsComponent,
                },
                {
                    path: 'greenhouse',
                    component: greenhouse_component_1.GreenHouseComponent
                },
                {
                    path: 'data',
                    component: data_component_1.DataComponent,
                },
                {
                    path: 'shop',
                    component: shop_component_1.ShopComponent,
                },
                {
                    path: 'detail/:en_name',
                    component: plant_detail_component_1.PlantDetailComponent
                },
                {
                    path: 'selection/:en_name',
                    component: greenhouse_selection_component_1.GreenHouseSelectionComponent
                },
                {
                    path: 'shop/plant/:en_name',
                    component: shop_plant_detail_component_1.ShopPlantDetailComponent
                },
                {
                    path: 'shop/other/:en_name',
                    component: shop_other_detail_component_1.ShopOtherDetailComponent
                },
                {
                    path: 'shop/buy/:en_name',
                    component: buy_form_component_1.BuyFormComponent
                }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
