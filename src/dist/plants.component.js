System.register(['angular2/core', './plants.service', "./pipes/capital.case.pipe", "./pipes/filter-by-name.pipe"], function(exports_1, context_1) {
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
    var core_1, plants_service_1, capital_case_pipe_1, filter_by_name_pipe_1;
    var PlantsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plants_service_1_1) {
                plants_service_1 = plants_service_1_1;
            },
            function (capital_case_pipe_1_1) {
                capital_case_pipe_1 = capital_case_pipe_1_1;
            },
            function (filter_by_name_pipe_1_1) {
                filter_by_name_pipe_1 = filter_by_name_pipe_1_1;
            }],
        execute: function() {
            PlantsComponent = (function () {
                function PlantsComponent(service) {
                    this.service = service;
                    this.nameFilter = "";
                }
                PlantsComponent = __decorate([
                    core_1.Component({
                        selector: 'sg-plants-component',
                        templateUrl: './templates/plants.component.html',
                        styleUrls: ['./styles/plants_page_styles.css'],
                        providers: [plants_service_1.PlantsService],
                        pipes: [capital_case_pipe_1.CapitalCasePipe, filter_by_name_pipe_1.FilterByNamePipe]
                    }), 
                    __metadata('design:paramtypes', [plants_service_1.PlantsService])
                ], PlantsComponent);
                return PlantsComponent;
            }());
            exports_1("PlantsComponent", PlantsComponent);
        }
    }
});
