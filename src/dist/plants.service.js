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
    var PlantsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlantsService = (function () {
                function PlantsService() {
                    this.plants = [
                        {
                            "name": "босилек",
                            "en_name": "basil"
                        },
                        {
                            "name": "мента",
                            "en_name": "mint"
                        },
                        {
                            "name": "репичка",
                            "en_name": "radish"
                        },
                        {
                            "name": "магданоз",
                            "en_name": "parsley"
                        },
                        {
                            "name": "риган",
                            "en_name": "oregano"
                        },
                        {
                            "name": "лук",
                            "en_name": "onion"
                        },
                        {
                            "name": "латинка",
                            "en_name": "nasturtium"
                        },
                        {
                            "name": "синап",
                            "en_name": "sinapis"
                        },
                        {
                            "name": "мащерка",
                            "en_name": "thymus"
                        },
                        {
                            "name": "манголд",
                            "en_name": "chard"
                        },
                        {
                            "name": "слънчоглед",
                            "en_name": "sunflower",
                            "specific": "sprout"
                        },
                        {
                            "name": "чубрица",
                            "en_name": "satureja"
                        },
                        {
                            "name": "житняк",
                            "en_name": "agropyron"
                        },
                        {
                            "name": "sage",
                            "en_name": "sage"
                        },
                        {
                            "name": "грах",
                            "en_name": "pea",
                            "specific": "sprout"
                        },
                        {
                            "name": "маруля",
                            "en_name": "lettuce"
                        },
                        {
                            "name": "леща",
                            "en_name": "lentil"
                        },
                        {
                            "name": "маточина",
                            "en_name": "balm"
                        },
                        {
                            "name": "komatsuna",
                            "en_name": "komatsuna"
                        },
                        {
                            "name": "сминдух",
                            "en_name": "fenugreek"
                        },
                        {
                            "name": "лен",
                            "en_name": "linum"
                        },
                        {
                            "name": "къдрaвo зеле",
                            "en_name": "kale"
                        },
                        {
                            "name": "копър",
                            "en_name": "dill"
                        },
                        {
                            "name": "сибирски лук",
                            "en_name": "chives"
                        },
                        {
                            "name": "кориандър",
                            "en_name": "cilantro"
                        },
                        {
                            "name": "зеле",
                            "en_name": "cabbage"
                        },
                        {
                            "name": "елда",
                            "en_name": "fagopyrum"
                        },
                        {
                            "name": "броколи",
                            "en_name": "broccoli"
                        },
                        {
                            "name": "цвекло",
                            "en_name": "beet",
                            "specific": "sprout"
                        },
                        {
                            "name": "рукола",
                            "en_name": "rucola"
                        },
                        {
                            "name": "марихуана",
                            "en_name": "weed"
                        }
                    ];
                }
                PlantsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PlantsService);
                return PlantsService;
            }());
            exports_1("PlantsService", PlantsService);
        }
    }
});
