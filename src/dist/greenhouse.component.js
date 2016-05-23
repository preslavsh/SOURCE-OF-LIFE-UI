System.register(['angular2/core', "./services/plants.service", "./services/greenhouse.service", "./models/greenhouse", "./models/plant", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, plants_service_1, greenhouse_service_1, greenhouse_1, plant_1, router_1;
    var GreenHouseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plants_service_1_1) {
                plants_service_1 = plants_service_1_1;
            },
            function (greenhouse_service_1_1) {
                greenhouse_service_1 = greenhouse_service_1_1;
            },
            function (greenhouse_1_1) {
                greenhouse_1 = greenhouse_1_1;
            },
            function (plant_1_1) {
                plant_1 = plant_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            GreenHouseComponent = (function () {
                function GreenHouseComponent(greenhouseService, _router) {
                    this.greenhouseService = greenhouseService;
                    this._router = _router;
                    this.hasNotPlant = true;
                    this.greenhouse = this.greenhouseService.greenhouses[0];
                    this.onChangeGreenHouse(this.greenhouseService.greenhouses[0].id);
                }
                GreenHouseComponent.prototype.onChangeGreenHouse = function (value) {
                    var ghouse = this.greenhouseService.getGreenHouse(parseInt(value));
                    var havePlants = ghouse.plants && ghouse.plants.length !== 0;
                    if (havePlants) {
                        this.greenhouse = new greenhouse_1.Greenhouse(ghouse.id, ghouse.name, ghouse.plants);
                    }
                    else {
                        this.greenhouse = new greenhouse_1.Greenhouse(ghouse.id, ghouse.name, [plant_1.Plant.empty()]);
                    }
                    this.hasNotPlant = !havePlants;
                };
                GreenHouseComponent.prototype.saveGreenhouseName = function () {
                    this.greenhouseService.renameGreenhouse(this.greenhouse.id, this.greenhouse.name);
                };
                GreenHouseComponent.prototype.gotoPlants = function () {
                    var link = ['Plants'];
                    this._router.navigate(link);
                };
                GreenHouseComponent.prototype.buy = function () {
                    var link = ['Shop'];
                    this._router.navigate(link);
                };
                GreenHouseComponent = __decorate([
                    core_1.Component({
                        selector: 'sg-greenhouse-component',
                        templateUrl: './templates/greenhouse.component.html',
                        styleUrls: ['styles/greenhouse.component.css'],
                        providers: [greenhouse_service_1.GreenhouseService, plants_service_1.PlantsService]
                    }), 
                    __metadata('design:paramtypes', [greenhouse_service_1.GreenhouseService, router_1.Router])
                ], GreenHouseComponent);
                return GreenHouseComponent;
            }());
            exports_1("GreenHouseComponent", GreenHouseComponent);
        }
    }
});
