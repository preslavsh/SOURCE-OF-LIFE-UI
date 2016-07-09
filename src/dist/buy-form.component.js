System.register(['@angular/core', "./services/plants.service", "@angular/router", "./services/shop.service", "./services/greenhouse-models.service", "./services/consumables.service"], function(exports_1, context_1) {
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
    var core_1, plants_service_1, router_1, shop_service_1, greenhouse_models_service_1, consumables_service_1;
    var BuyFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plants_service_1_1) {
                plants_service_1 = plants_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shop_service_1_1) {
                shop_service_1 = shop_service_1_1;
            },
            function (greenhouse_models_service_1_1) {
                greenhouse_models_service_1 = greenhouse_models_service_1_1;
            },
            function (consumables_service_1_1) {
                consumables_service_1 = consumables_service_1_1;
            }],
        execute: function() {
            BuyFormComponent = (function () {
                function BuyFormComponent(service, _route) {
                    this.service = service;
                    this._route = _route;
                    this.city = "1";
                    this.count = 1;
                    this.hasOrdered = false;
                }
                BuyFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._route.params.subscribe(function (params) {
                        var en_name = params['en_name'];
                        _this.item = _this.service.getByEnName(en_name);
                    });
                };
                BuyFormComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                BuyFormComponent.prototype.goBack = function () {
                    window.history.back();
                };
                BuyFormComponent.prototype.order = function () {
                    if (this.address && this.address.length !== 0) {
                        this.hasOrdered = true;
                    }
                };
                BuyFormComponent = __decorate([
                    core_1.Component({
                        selector: "sg-buy-form-component",
                        templateUrl: "templates/buy-form.component.html",
                        styleUrls: ['styles/buy-form.component.css'],
                        providers: [consumables_service_1.ConsumablesService, greenhouse_models_service_1.GreenhouseModelsService, plants_service_1.PlantsService, shop_service_1.ShopService]
                    }), 
                    __metadata('design:paramtypes', [shop_service_1.ShopService, router_1.ActivatedRoute])
                ], BuyFormComponent);
                return BuyFormComponent;
            }());
            exports_1("BuyFormComponent", BuyFormComponent);
        }
    }
});
