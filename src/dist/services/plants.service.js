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
                            "en_name": "basil",
                            "description": "\u0411\u043E\u0441\u0438\u043B\u0435\u043A\u044A\u0442 (Ocimum basilicum),\n                \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u043E\u0449\u0435 \u043A\u0430\u0442\u043E \u201E\u0446\u0430\u0440\u0441\u043A\u0430 \u0431\u0438\u043B\u043A\u0430\u201C (\u043E\u0442 \u0433\u0440. basilicum \u2014 \u0446\u0430\u0440\u0441\u043A\u0438),\n                \u0435 \u0435\u0434\u043D\u043E\u0433\u043E\u0434\u0438\u0448\u043D\u043E \u0442\u0440\u0435\u0432\u0438\u0441\u0442\u043E \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435 \u0441 \u0433\u043E\u043B\u043E \u0447\u0435\u0442\u0438\u0440\u0438\u0440\u044A\u0431\u0435\u0441\u0442\u043E \u0441\u0442\u044A\u0431\u043B\u043E.\n                \u0420\u0430\u0437\u043A\u043B\u043E\u043D\u0435\u043D\u043E \u0434\u043E\u0441\u0442\u0438\u0433\u0430 \u0434\u043E \u0432\u0438\u0441\u043E\u0447\u0438\u043D\u0430 60 cm. \u041B\u0438\u0441\u0442\u0430\u0442\u0430 \u043C\u0443 \u0441\u0430 \u044F\u0439\u0446\u0435\u0432\u0438\u0434\u043D\u043E-\u043F\u0440\u043E\u0434\u044A\u043B\u0433\u043E\u0432\u0430\u0442\u0438\n                \u0441 \u0434\u044A\u043B\u0433\u0438 \u0434\u0440\u044A\u0436\u043A\u0438 \u0438 \u0437\u0430\u043E\u0441\u0442\u0440\u0435\u043D\u0438 \u0432 \u043A\u0440\u0430\u044F. \u0426\u0432\u0435\u0442\u043E\u0432\u0435\u0442\u0435 \u0441\u0430 \u043F\u0440\u0435\u0434\u0438\u043C\u043D\u043E \u0431\u0435\u043B\u0438, \u043C\u043D\u043E\u0433\u043E \u0440\u044F\u0434\u043A\u043E\n                \u043B\u0438\u043B\u0430\u0432\u043E-\u0431\u0435\u043B\u0438 \u0438\u043B\u0438 \u0447\u0435\u0440\u0432\u0435\u043D\u0438. \u041F\u043B\u043E\u0434\u043E\u0432\u0435\u0442\u0435 \u0441\u0430 \u0441\u0443\u0445\u0438 \u0438 \u0441\u043B\u0435\u0434 \u043A\u0430\u0442\u043E \u0443\u0437\u0440\u0435\u044F\u0442 \u0441\u0435 \u0440\u0430\u0437\u043F\u0430\u0434\u0430\u0442\n                \u043D\u0430 \u0447\u0435\u0442\u0438\u0440\u0438 \u043C\u0430\u043B\u043A\u0438 \u0441\u0435\u043C\u0435\u043D\u0446\u0430. \u0426\u044A\u0444\u0442\u0438 \u043E\u0442 \u044E\u043D\u0438 \u0434\u043E \u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438. \u041A\u0430\u0442\u043E \u0431\u0438\u043B\u043A\u0430 \u0438 \u043F\u043E\u0434\u043F\u0440\u0430\u0432\u043A\u0430\n                \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435\u0442\u043E, \u043D\u0430\u0439-\u0447\u0435\u0441\u0442\u043E \u0441\u0442\u0440\u044A\u043A\u043E\u0432\u0435\u0442\u0435 \u0432 \u043F\u0440\u0435\u0441\u0435\u043D\n                \u0432\u0438\u0434, \u043A\u0430\u0442\u043E \u0441\u0435 \u0431\u0435\u0440\u0435 \u043F\u043E \u0432\u0440\u0435\u043C\u0435 \u043D\u0430 \u0446\u044A\u0444\u0442\u0435\u0436\u0430, \u0430 \u0437\u0430 \u0441\u0443\u0448\u0435\u043D\u0435 \u2014 \u043F\u0440\u0435\u0434\u0438 \u0446\u044A\u0444\u0442\u0435\u0436\u0430.\n                \u0421\u044A\u0434\u044A\u0440\u0436\u0430 \u0435\u0442\u0435\u0440\u0438\u0447\u043D\u043E \u043C\u0430\u0441\u043B\u043E, \u0433\u043E\u0440\u0447\u0438\u0432\u043E \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u0433\u043B\u0438\u043A\u043E\u0437\u0438\u0434\u0438, \u0442\u0430\u043D\u0438\u043D\u0438, \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u043D\u0438 \u043A\u0438\u0441\u0435\u043B\u0438\u043D\u0438,\n                \u043C\u0438\u043D\u0435\u0440\u0430\u043B\u043D\u0438 \u0441\u043E\u043B\u0438. \u0420\u043E\u0434\u0438\u043D\u0430 \u043D\u0430 \u0431\u043E\u0441\u0438\u043B\u0435\u043A\u0430 \u0441\u0430 \u0442\u0440\u043E\u043F\u0438\u0446\u0438\u0442\u0435 \u043D\u0430 \u0410\u0437\u0438\u044F \u0438 \u0410\u0444\u0440\u0438\u043A\u0430.\n                \u041E\u0442\u0433\u043B\u0435\u0436\u0434\u0430 \u0441\u0435 \u043A\u0443\u043B\u0442\u0443\u0440\u043D\u043E \u0432 \u0415\u0432\u0440\u043E\u043F\u0430 \u043E\u0442 \u0432\u0435\u043A\u043E\u0432\u0435.",
                            "ph": "5.5 - 6.5",
                            "sun": "Пълно слънце",
                            "water": "Седмично",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "мента",
                            "en_name": "mint",
                            "description": "\u041C\u0435\u043D\u0442\u0430 (Mentha) \u0435 \u0440\u043E\u0434 \u043C\u043D\u043E\u0433\u043E\u0433\u043E\u0434\u0438\u0448\u043D\u0438\n            \u0442\u0440\u0435\u0432\u0438\u0441\u0442\u0438 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u043E\u0442 \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u043E \u0423\u0441\u0442\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u0438. \u0420\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430\n            \u0435 \u0433\u043B\u0430\u0432\u043D\u043E \u0432 \u0441\u0435\u0432\u0435\u0440\u043D\u0438\u044F \u0443\u043C\u0435\u0440\u0435\u043D \u043F\u043E\u044F\u0441. \u0412 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u0441\u0435 \u0441\u0440\u0435\u0449\u0430\u0442 \u043E\u043A\u043E\u043B\u043E\n            9 \u0432\u0438\u0434\u0430 \u0441 \u043C\u043D\u043E\u0433\u043E\u0431\u0440\u043E\u0439\u043D\u0438 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438, \u043E\u0442 \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043E\u0442\u0433\u043B\u0435\u0436\u0434\u0430 M. piperita\n            \u2013 \u0447\u0435\u0440\u043D\u0430 \u043C\u0435\u043D\u0442\u0430 \u0438 \u0434\u0436\u043E\u0434\u0436\u0435\u043D \u2013 M. spicata. \u0421\u0442\u044A\u0431\u043B\u043E\u0442\u043E \u0435 \u043A\u043B\u043E\u043D\u0435\u0441\u0442\u043E,\n            \u0432\u0438\u0441\u043E\u043A\u043E \u043E\u043A\u043E\u043B\u043E 0,70 m, \u0447\u0435\u0442\u0438\u0440\u0438\u0440\u044A\u0431\u0435\u0441\u0442\u043E, \u043B\u0438\u0441\u0442\u0430\u0442\u0430 \u0441\u0430 \u043F\u0440\u043E\u0441\u0442\u0438,\n            \u043F\u0440\u043E\u0434\u044A\u043B\u0433\u043E\u0432\u0430\u0442\u0438, \u043E\u0441\u0442\u0440\u043E \u043D\u0430\u0437\u044A\u0431\u0435\u043D\u0438. \u0426\u0432\u0435\u0442\u043E\u0432\u0435\u0442\u0435 \u0441\u0430 \u0447\u0435\u0440\u0432\u0435\u043D\u0438\u043A\u0430\u0432\u043E\u0432\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u0438,\n            \u0441\u044A\u0431\u0440\u0430\u043D\u0438 \u0432 \u043A\u043B\u0430\u0441\u043E\u0432\u0438\u0434\u043D\u0438 \u0441\u044A\u0446\u0432\u0435\u0442\u0438\u044F; \u0441\u0435\u043C\u0435\u043D\u0430\u0442\u0430 \u0441\u0430 \u0434\u0440\u0435\u0431\u043D\u0438.\n            \u0412\u0441\u0438\u0447\u043A\u0438 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u0438 \u0447\u0430\u0441\u0442\u0438 \u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435\u0442\u043E \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0442 \u0435\u0442\u0435\u0440\u0438\u0447\u043D\u043E\n            \u043C\u0430\u0441\u043B\u043E \u0441 \u0433\u043B\u0430\u0432\u043D\u0430 \u0441\u044A\u0441\u0442\u0430\u0432\u043D\u0430 \u0447\u0430\u0441\u0442 \u043C\u0435\u043D\u0442\u043E\u043B (45-65%). \u041E\u0442 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u0430\u0442\u0430 \u043C\u0430\u0441\u0430,\n            \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430 \u043E\u0442 1 \u0434\u0435\u043A\u0430\u0440, \u043F\u0440\u0438\u0431\u0440\u0430\u043D\u0430 \u0432 \u043F\u044A\u043B\u0435\u043D \u0446\u044A\u0444\u0442\u0435\u0436 \u043F\u0440\u0435\u0437 \u0441\u043B\u044A\u043D\u0447\u0435\u0432\u043E \u0432\u0440\u0435\u043C\u0435,\n            \u0441\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430 \u043F\u0440\u0438 \u043F\u0430\u0440\u043D\u0430 \u0434\u0435\u0441\u0442\u0438\u043B\u0430\u0446\u0438\u044F \u043E\u043A\u043E\u043B\u043E 3-5  kg \u0435\u0442\u0435\u0440\u0438\u0447\u043D\u043E \u043C\u0430\u0441\u043B\u043E.\n            \u0412 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u0441\u0435 \u043A\u0443\u043B\u0442\u0438\u0432\u0438\u0440\u0430 \u043F\u043E \u043F\u043E\u0440\u0435\u0447\u0438\u044F\u0442\u0430 \u043D\u0430 \u0440\u0435\u043A\u0438\u0442\u0435 \u041C\u0430\u0440\u0438\u0446\u0430, \u0422\u0443\u043D\u0434\u0436\u0430,\n            \u0412\u0438\u0442 \u0438 \u0434\u0440. \u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043C\u0435\u043D\u0442\u0430\u0442\u0430 \u043A\u0430\u0442\u043E \u0430\u043B\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u0443\u043B\u0442\u0443\u0440\u0430 \u0441\u0435\n            \u0441\u044A\u0441\u0442\u043E\u0438 \u0432 \u043C\u0435\u043D\u0442\u043E\u0432 \u043B\u0438\u0441\u0442, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0437\u0430 \u0438\u0437\u043D\u043E\u0441 \u0438\u043B\u0438 \u0437\u0430 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430\n            \u043A\u0430\u0442\u043E \u0442\u0440\u0430\u043F\u0435\u0437\u0435\u043D \u0447\u0430\u0439. \u041F\u0440\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0430 \u0430\u0433\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u043D\u0435\u043F\u043E\u043B\u0438\u0432\u043D\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F,\n            \u0434\u043E\u0431\u0438\u0432\u0438\u0442\u0435 \u0441\u0430 \u043E\u043A\u043E\u043B\u043E 150 \u2013 200 kg/da. \u041F\u0440\u0438 \u0444\u0430\u043C\u0438\u043B\u043D\u0438 \u043F\u043B\u043E\u0449\u0438 \u0441 \u043C\u0430\u043B\u044A\u043A \u0440\u0430\u0437\u043C\u0435\u0440\n            \u0438 \u043C\u043D\u043E\u0433\u043E \u0434\u043E\u0431\u0440\u043E \u0442\u043E\u0440\u0435\u043D\u0435 \u0438 \u043F\u043E\u043B\u0438\u0432\u0430\u043D\u0435, \u0434\u043E\u0431\u0438\u0432\u0438\u0442\u0435 \u0441\u0430 \u043D\u0430\u0434 300 kg/da. \u0417\u0430 \u0444\u0430\u043C\u0438\u043B\u043D\u0438\n            \u0442\u0435\u0440\u0435\u043D\u0438 \u043E\u043F\u0442\u0438\u043C\u0443\u043C\u044A\u0442 \u0435 10 \u2013 50 da. \u041F\u0440\u0438 \u0434\u043E\u0431\u0438\u0432 400 kg \u0441\u0443\u0445 \u043C\u0435\u043D\u0442\u043E\u0432 \u043B\u0438\u0441\u0442 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435\n            \u0441\u0430 \u043E\u0442 \u043F\u043E\u0440\u044F\u0434\u044A\u043A\u0430 \u043D\u0430 640 \u2013 800 \u043B\u0432. \u0431\u0440\u0443\u0442\u043E \u0434\u043E\u0445\u043E\u0434 \u043E\u0442 \u0434\u0435\u043A\u0430\u0440, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442 \u043E\u0442 \u0446\u0435\u043D\u0430\u0442\u0430\n            \u043D\u0430 \u0438\u0437\u043A\u0443\u043F\u0443\u0432\u0430\u043D\u0435 \u043F\u043E \u0432\u0440\u0435\u043C\u0435 \u043D\u0430 \u0441\u0435\u0437\u043E\u043D\u0430.",
                            "ph": "7.0 - 8.0",
                            "dishes": [{ name: 'Мохито', img_name: "mohito.png" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "репичка",
                            "en_name": "radish",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "магданоз",
                            "en_name": "parsley",
                            "description": "",
                            "ph": "5.0 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "риган",
                            "en_name": "oregano",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "лук",
                            "en_name": "onion",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "латинка",
                            "en_name": "nasturtium",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "синап",
                            "en_name": "sinapis",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "мащерка",
                            "en_name": "thymus",
                            "description": "",
                            "ph": "5.5 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "манголд",
                            "en_name": "chard",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "слънчоглед",
                            "en_name": "sunflower",
                            "specific": "sprout",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "чубрица",
                            "en_name": "satureja",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "житняк",
                            "en_name": "agropyron",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "sage",
                            "en_name": "sage",
                            "description": "",
                            "ph": "5.5 - 6.5",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "грах",
                            "en_name": "pea",
                            "specific": "sprout",
                            "description": "",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "маруля",
                            "en_name": "lettuce",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "леща",
                            "en_name": "lentil",
                            "description": "",
                            "ph": "5.5 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "маточина",
                            "en_name": "balm",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "komatsuna",
                            "en_name": "komatsuna",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "сминдух",
                            "en_name": "fenugreek",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "лен",
                            "en_name": "linum",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "къдрaвo зеле",
                            "en_name": "kale",
                            "description": "",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "копър",
                            "en_name": "dill",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "сибирски лук",
                            "en_name": "chives",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "кориандър",
                            "en_name": "cilantro",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "зеле",
                            "en_name": "cabbage",
                            "description": "",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "елда",
                            "en_name": "fagopyrum",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "броколи",
                            "en_name": "broccoli",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "цвекло",
                            "en_name": "beet",
                            "specific": "sprout",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "рукола",
                            "en_name": "rucola",
                            "dishes": [{ name: 'Песто', img_name: "pesto.jpg" }, { name: 'Капрезе', img_name: "kapreze.jpg" }]
                        },
                        {
                            "name": "марихуана",
                            "en_name": "weed",
                            "dishes": [{ name: 'Коз', img_name: "joint.jpg" }, { name: 'Бонг', img_name: "bong.jpg" }]
                        }
                    ];
                }
                PlantsService.prototype.getByEnName = function (en_name) {
                    return this.plants.filter(function (p) { return p.en_name === en_name; })[0];
                };
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
