System.register(['@angular/core'], function(exports_1, context_1) {
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
    var GreenhouseModelsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GreenhouseModelsService = (function () {
                function GreenhouseModelsService() {
                    this.models = [
                        {
                            "id": 1,
                            "category": "greenhouse",
                            "name": "Голям парник",
                            "en_name": "biggreenhouse",
                            "description": "\u0421 \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0430 \u0433\u043E\u043B\u044F\u043C \u0445\u043B\u0430\u0434\u0438\u043B\u043D\u0438\u043A, \u0432\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430\n            \u043E\u0442\u0433\u043B\u0435\u0434\u0430\u0442\u0435 \u0433\u043E\u043B\u044F\u043C \u0431\u0440\u043E\u0439 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435"
                        },
                        {
                            "id": 2,
                            "category": "greenhouse",
                            "name": "Малък парник",
                            "en_name": "smallgreenhouse",
                            "description": "\u0421 \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0430 \u043C\u0430\u043B\u044A\u043A \u0445\u043B\u0430\u0434\u0438\u043B\u043D\u0438\u043A, \u0432\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430\n            \u043E\u0442\u0433\u043B\u0435\u0434\u0430\u0442\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435"
                        },
                        {
                            "id": 3,
                            "category": "greenhouse",
                            "name": "Плот парник",
                            "en_name": "plotgreenhouse",
                            "description": "\u0421 \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0430 \u043C\u0430\u043B\u044A\u043A \u0445\u043B\u0430\u0434\u0438\u043B\u043D\u0438\u043A, \u0432\u0438\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430\n            \u043E\u0442\u0433\u043B\u0435\u0434\u0430\u0442\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u0438 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u0438 \u0434\u0430 \u0433\u043E \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442\u0435 \u0437\u0430 \u043F\u043B\u043E\u0442 \u0432\n            \u043A\u0443\u0445\u043D\u044F\u0442\u0430"
                        }
                    ];
                }
                GreenhouseModelsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GreenhouseModelsService);
                return GreenhouseModelsService;
            }());
            exports_1("GreenhouseModelsService", GreenhouseModelsService);
        }
    }
});
