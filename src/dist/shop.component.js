System.register(['angular2/core', "./services/shop.service", "./services/consumables.service", "./services/greenhouse-models.service", "./services/plants.service", "./pipes/capital.case.pipe", "./pipes/filter-by-name-cat.pipe", "./directives/select-type.directive", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, shop_service_1, consumables_service_1, greenhouse_models_service_1, plants_service_1, capital_case_pipe_1, filter_by_name_cat_pipe_1, select_type_directive_1, router_1;
    var ShopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shop_service_1_1) {
                shop_service_1 = shop_service_1_1;
            },
            function (consumables_service_1_1) {
                consumables_service_1 = consumables_service_1_1;
            },
            function (greenhouse_models_service_1_1) {
                greenhouse_models_service_1 = greenhouse_models_service_1_1;
            },
            function (plants_service_1_1) {
                plants_service_1 = plants_service_1_1;
            },
            function (capital_case_pipe_1_1) {
                capital_case_pipe_1 = capital_case_pipe_1_1;
            },
            function (filter_by_name_cat_pipe_1_1) {
                filter_by_name_cat_pipe_1 = filter_by_name_cat_pipe_1_1;
            },
            function (select_type_directive_1_1) {
                select_type_directive_1 = select_type_directive_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ShopComponent = (function () {
                function ShopComponent(service, _router) {
                    this.service = service;
                    this._router = _router;
                    this.nameFilter = "";
                }
                ShopComponent.prototype.gotoDetail = function (en_name, category) {
                    if (category === 'plant') {
                        var link = ['ShopPlantDetail', { en_name: en_name }];
                        this._router.navigate(link);
                    }
                    else if (category === 'greenhouse' || category === 'consumables') {
                        var link = ['ShopOtherDetail', { en_name: en_name }];
                        this._router.navigate(link);
                    }
                };
                ShopComponent.prototype.buy = function (en_name) {
                    var link = ['BuyForm', { en_name: en_name }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ShopComponent.prototype, "select", void 0);
                ShopComponent = __decorate([
                    core_1.Component({
                        selector: 'sg-shop-component',
                        templateUrl: './templates/shop.component.html',
                        styleUrls: ['./styles/shop.component.css'],
                        directives: [select_type_directive_1.SelectTypeDirective],
                        providers: [consumables_service_1.ConsumablesService, greenhouse_models_service_1.GreenhouseModelsService, plants_service_1.PlantsService, shop_service_1.ShopService],
                        pipes: [capital_case_pipe_1.CapitalCasePipe, filter_by_name_cat_pipe_1.FilterByNameCatPipe]
                    }), 
                    __metadata('design:paramtypes', [shop_service_1.ShopService, router_1.Router])
                ], ShopComponent);
                return ShopComponent;
            }());
            exports_1("ShopComponent", ShopComponent);
        }
    }
});
