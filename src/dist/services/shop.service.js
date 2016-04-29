System.register(['angular2/core', "./consumables.service", "./greenhouse-models.service", "./plants.service"], function(exports_1, context_1) {
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
    var core_1, consumables_service_1, greenhouse_models_service_1, plants_service_1;
    var ShopService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (consumables_service_1_1) {
                consumables_service_1 = consumables_service_1_1;
            },
            function (greenhouse_models_service_1_1) {
                greenhouse_models_service_1 = greenhouse_models_service_1_1;
            },
            function (plants_service_1_1) {
                plants_service_1 = plants_service_1_1;
            }],
        execute: function() {
            ShopService = (function () {
                function ShopService(consumablesService, greenhouseModelsService, plantsService) {
                    this.consumablesService = consumablesService;
                    this.greenhouseModelsService = greenhouseModelsService;
                    this.plantsService = plantsService;
                    this.items = greenhouseModelsService.models.concat(consumablesService.consumables).concat(plantsService.plants);
                }
                ShopService.prototype.getByEnName = function (en_name) {
                    return this.items.filter(function (i) { return i.en_name === en_name; })[0];
                };
                ShopService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [consumables_service_1.ConsumablesService, greenhouse_models_service_1.GreenhouseModelsService, plants_service_1.PlantsService])
                ], ShopService);
                return ShopService;
            }());
            exports_1("ShopService", ShopService);
        }
    }
});
