System.register(['angular2/core', './services/greenhouse.service', './services/plants.service', 'angular2/router', "./models/plant", "./models/greenhouse"], function(exports_1, context_1) {
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
    var core_1, greenhouse_service_1, plants_service_1, router_1, plant_1, greenhouse_1, router_2;
    var GreenHouseSelectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (greenhouse_service_1_1) {
                greenhouse_service_1 = greenhouse_service_1_1;
            },
            function (plants_service_1_1) {
                plants_service_1 = plants_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (plant_1_1) {
                plant_1 = plant_1_1;
            },
            function (greenhouse_1_1) {
                greenhouse_1 = greenhouse_1_1;
            }],
        execute: function() {
            GreenHouseSelectionComponent = (function () {
                function GreenHouseSelectionComponent(_plantService, greenhouseService, _routeParams, _router) {
                    this._plantService = _plantService;
                    this.greenhouseService = greenhouseService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.areTheSame = false;
                    this.hasNotPlant = true;
                }
                GreenHouseSelectionComponent.prototype.ngOnInit = function () {
                    var en_name = this._routeParams.get('en_name');
                    var p = this._plantService.getByEnName(en_name);
                    this.plant = new plant_1.Plant(p.name, p.en_name, p.dishes);
                    this.greenhouse = this.greenhouseService.greenhouses[0];
                    this.onChangeGreenHouse(this.greenhouseService.greenhouses[0].id);
                };
                GreenHouseSelectionComponent.prototype.goBack = function () {
                    window.history.back();
                };
                GreenHouseSelectionComponent.prototype.onChangeGreenHouse = function (value) {
                    var ghouse = this.greenhouseService.getGreenHouse(parseInt(value));
                    var havePlants = ghouse.plants && ghouse.plants.length !== 0;
                    if (havePlants) {
                        this.greenhouse = new greenhouse_1.Greenhouse(ghouse.id, ghouse.name, ghouse.plants);
                        this.areTheSame = (this.plant.en_name === this.greenhouse.plants[0].en_name);
                    }
                    else {
                        this.greenhouse = new greenhouse_1.Greenhouse(ghouse.id, ghouse.name, [new plant_1.Plant("", "", "")]);
                        this.areTheSame = false;
                    }
                    this.hasNotPlant = !havePlants;
                };
                GreenHouseSelectionComponent.prototype.beginGrowing = function () {
                    this.greenhouseService.replacePlant(this.greenhouse.id, this.plant);
                    var ghouse = this.greenhouseService.getGreenHouse(this.greenhouse.id);
                    this.greenhouse = new greenhouse_1.Greenhouse(ghouse.id, ghouse.name, ghouse.plants);
                    this.hasNotPlant = false;
                    this.areTheSame = true;
                };
                GreenHouseSelectionComponent.prototype.buy = function () {
                    var link = ['Shop'];
                    this._router.navigate(link);
                };
                GreenHouseSelectionComponent = __decorate([
                    core_1.Component({
                        selector: "sg-greenhouse-selection",
                        templateUrl: "templates/greenhouse-selection.component.html",
                        styleUrls: ['styles/greenhouse-selection.component.css'],
                        providers: [greenhouse_service_1.GreenhouseService, plants_service_1.PlantsService]
                    }), 
                    __metadata('design:paramtypes', [plants_service_1.PlantsService, greenhouse_service_1.GreenhouseService, router_1.RouteParams, router_2.Router])
                ], GreenHouseSelectionComponent);
                return GreenHouseSelectionComponent;
            }());
            exports_1("GreenHouseSelectionComponent", GreenHouseSelectionComponent);
        }
    }
});
