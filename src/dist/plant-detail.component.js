System.register(['angular2/core', "./services/plants.service", "angular2/router", "./models/plant"], function(exports_1, context_1) {
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
    var core_1, plants_service_1, router_1, plant_1;
    var PlantDetailComponent;
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
            function (plant_1_1) {
                plant_1 = plant_1_1;
            }],
        execute: function() {
            PlantDetailComponent = (function () {
                function PlantDetailComponent(_plantService, _routeParams, _router) {
                    this._plantService = _plantService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                PlantDetailComponent.prototype.ngOnInit = function () {
                    var en_name = this._routeParams.get('en_name');
                    var p = this._plantService.getByEnName(en_name);
                    this.plant = new plant_1.Plant(p.name, p.en_name, p.dishes);
                };
                PlantDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                PlantDetailComponent.prototype.gotoGreenhouseSelection = function (en_name) {
                    var link = ['GreenhouseSelection', { en_name: en_name }];
                    this._router.navigate(link);
                };
                PlantDetailComponent = __decorate([
                    core_1.Component({
                        selector: "sg-plant-detail-component",
                        templateUrl: "templates/plant-detail.component.html",
                        styleUrls: ['styles/plant-detail.component.css'],
                        providers: [plants_service_1.PlantsService]
                    }), 
                    __metadata('design:paramtypes', [plants_service_1.PlantsService, router_1.RouteParams, router_1.Router])
                ], PlantDetailComponent);
                return PlantDetailComponent;
            }());
            exports_1("PlantDetailComponent", PlantDetailComponent);
        }
    }
});