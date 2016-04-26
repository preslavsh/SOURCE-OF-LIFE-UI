System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var GreenhouseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GreenhouseService = (function () {
                function GreenhouseService() {
                    this.greenhouses = [
                        {
                            "id": 1,
                            "name": "Парник в ресторанта",
                            "plants": [{
                                    "name": "грах",
                                    "en_name": "pea",
                                    "specific": "sprout",
                                    "description": "",
                                    "ph": "6.0 - 7.5",
                                    "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                                }]
                        },
                        {
                            "id": 2,
                            "name": "Парник в дома",
                            "plants": []
                        }
                    ];
                }
                GreenhouseService.prototype.getGreenHouse = function (id) {
                    return this.greenhouses.filter(function (g) { return g.id == id; })[0];
                };
                GreenhouseService.prototype.addPlant = function (id, plant) {
                    this.greenhouses.filter(function (g) { return g.id == id; })[0].plants.push(plant);
                };
                GreenhouseService.prototype.removePlant = function (id) {
                    this.greenhouses.filter(function (g) { return g.id == id; })[0].plants.pop();
                };
                GreenhouseService.prototype.replacePlant = function (id, newPlant) {
                    this.removePlant(id);
                    this.addPlant(id, newPlant);
                };
                GreenhouseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GreenhouseService);
                return GreenhouseService;
            }());
            exports_1("GreenhouseService", GreenhouseService);
        }
    }
});
