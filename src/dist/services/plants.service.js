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
                            "category": "plant",
                            "description": "\u0411\u043E\u0441\u0438\u043B\u0435\u043A\u044A\u0442 (Ocimum basilicum),\n                \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u043E\u0449\u0435 \u043A\u0430\u0442\u043E \u201E\u0446\u0430\u0440\u0441\u043A\u0430 \u0431\u0438\u043B\u043A\u0430\u201C (\u043E\u0442 \u0433\u0440. basilicum \u2014 \u0446\u0430\u0440\u0441\u043A\u0438),\n                \u0435 \u0435\u0434\u043D\u043E\u0433\u043E\u0434\u0438\u0448\u043D\u043E \u0442\u0440\u0435\u0432\u0438\u0441\u0442\u043E \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435 \u0441 \u0433\u043E\u043B\u043E \u0447\u0435\u0442\u0438\u0440\u0438\u0440\u044A\u0431\u0435\u0441\u0442\u043E \u0441\u0442\u044A\u0431\u043B\u043E.\n                \u0420\u0430\u0437\u043A\u043B\u043E\u043D\u0435\u043D\u043E \u0434\u043E\u0441\u0442\u0438\u0433\u0430 \u0434\u043E \u0432\u0438\u0441\u043E\u0447\u0438\u043D\u0430 60 cm. \u041B\u0438\u0441\u0442\u0430\u0442\u0430 \u043C\u0443 \u0441\u0430 \u044F\u0439\u0446\u0435\u0432\u0438\u0434\u043D\u043E-\u043F\u0440\u043E\u0434\u044A\u043B\u0433\u043E\u0432\u0430\u0442\u0438\n                \u0441 \u0434\u044A\u043B\u0433\u0438 \u0434\u0440\u044A\u0436\u043A\u0438 \u0438 \u0437\u0430\u043E\u0441\u0442\u0440\u0435\u043D\u0438 \u0432 \u043A\u0440\u0430\u044F. \u0426\u0432\u0435\u0442\u043E\u0432\u0435\u0442\u0435 \u0441\u0430 \u043F\u0440\u0435\u0434\u0438\u043C\u043D\u043E \u0431\u0435\u043B\u0438, \u043C\u043D\u043E\u0433\u043E \u0440\u044F\u0434\u043A\u043E\n                \u043B\u0438\u043B\u0430\u0432\u043E-\u0431\u0435\u043B\u0438 \u0438\u043B\u0438 \u0447\u0435\u0440\u0432\u0435\u043D\u0438. \u041F\u043B\u043E\u0434\u043E\u0432\u0435\u0442\u0435 \u0441\u0430 \u0441\u0443\u0445\u0438 \u0438 \u0441\u043B\u0435\u0434 \u043A\u0430\u0442\u043E \u0443\u0437\u0440\u0435\u044F\u0442 \u0441\u0435 \u0440\u0430\u0437\u043F\u0430\u0434\u0430\u0442\n                \u043D\u0430 \u0447\u0435\u0442\u0438\u0440\u0438 \u043C\u0430\u043B\u043A\u0438 \u0441\u0435\u043C\u0435\u043D\u0446\u0430. \u0426\u044A\u0444\u0442\u0438 \u043E\u0442 \u044E\u043D\u0438 \u0434\u043E \u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438. \u041A\u0430\u0442\u043E \u0431\u0438\u043B\u043A\u0430 \u0438 \u043F\u043E\u0434\u043F\u0440\u0430\u0432\u043A\u0430\n                \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u0430\u0442\u0430 \u0447\u0430\u0441\u0442 \u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435\u0442\u043E, \u043D\u0430\u0439-\u0447\u0435\u0441\u0442\u043E \u0441\u0442\u0440\u044A\u043A\u043E\u0432\u0435\u0442\u0435 \u0432 \u043F\u0440\u0435\u0441\u0435\u043D\n                \u0432\u0438\u0434, \u043A\u0430\u0442\u043E \u0441\u0435 \u0431\u0435\u0440\u0435 \u043F\u043E \u0432\u0440\u0435\u043C\u0435 \u043D\u0430 \u0446\u044A\u0444\u0442\u0435\u0436\u0430, \u0430 \u0437\u0430 \u0441\u0443\u0448\u0435\u043D\u0435 \u2014 \u043F\u0440\u0435\u0434\u0438 \u0446\u044A\u0444\u0442\u0435\u0436\u0430.\n                \u0421\u044A\u0434\u044A\u0440\u0436\u0430 \u0435\u0442\u0435\u0440\u0438\u0447\u043D\u043E \u043C\u0430\u0441\u043B\u043E, \u0433\u043E\u0440\u0447\u0438\u0432\u043E \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E, \u0433\u043B\u0438\u043A\u043E\u0437\u0438\u0434\u0438, \u0442\u0430\u043D\u0438\u043D\u0438, \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u043D\u0438 \u043A\u0438\u0441\u0435\u043B\u0438\u043D\u0438,\n                \u043C\u0438\u043D\u0435\u0440\u0430\u043B\u043D\u0438 \u0441\u043E\u043B\u0438. \u0420\u043E\u0434\u0438\u043D\u0430 \u043D\u0430 \u0431\u043E\u0441\u0438\u043B\u0435\u043A\u0430 \u0441\u0430 \u0442\u0440\u043E\u043F\u0438\u0446\u0438\u0442\u0435 \u043D\u0430 \u0410\u0437\u0438\u044F \u0438 \u0410\u0444\u0440\u0438\u043A\u0430.\n                \u041E\u0442\u0433\u043B\u0435\u0436\u0434\u0430 \u0441\u0435 \u043A\u0443\u043B\u0442\u0443\u0440\u043D\u043E \u0432 \u0415\u0432\u0440\u043E\u043F\u0430 \u043E\u0442 \u0432\u0435\u043A\u043E\u0432\u0435.",
                            "ph": "5.5 - 6.5",
                            "sun": "Пълно слънце",
                            "water": "Седмично",
                            "dishes": [{ name: 'Песто', img_name: "pesto" }, { name: 'Капрезе', img_name: "kapreze" }]
                        },
                        {
                            "name": "мента",
                            "en_name": "mint",
                            "category": "plant",
                            "description": "\u041C\u0435\u043D\u0442\u0430 (Mentha) \u0435 \u0440\u043E\u0434 \u043C\u043D\u043E\u0433\u043E\u0433\u043E\u0434\u0438\u0448\u043D\u0438\n            \u0442\u0440\u0435\u0432\u0438\u0441\u0442\u0438 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u044F \u043E\u0442 \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u043E \u0423\u0441\u0442\u043D\u043E\u0446\u0432\u0435\u0442\u043D\u0438. \u0420\u0430\u0437\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0430\n            \u0435 \u0433\u043B\u0430\u0432\u043D\u043E \u0432 \u0441\u0435\u0432\u0435\u0440\u043D\u0438\u044F \u0443\u043C\u0435\u0440\u0435\u043D \u043F\u043E\u044F\u0441. \u0412 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u0441\u0435 \u0441\u0440\u0435\u0449\u0430\u0442 \u043E\u043A\u043E\u043B\u043E\n            9 \u0432\u0438\u0434\u0430 \u0441 \u043C\u043D\u043E\u0433\u043E\u0431\u0440\u043E\u0439\u043D\u0438 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0438, \u043E\u0442 \u043A\u043E\u0438\u0442\u043E \u0441\u0435 \u043E\u0442\u0433\u043B\u0435\u0436\u0434\u0430 M. piperita\n            \u2013 \u0447\u0435\u0440\u043D\u0430 \u043C\u0435\u043D\u0442\u0430 \u0438 \u0434\u0436\u043E\u0434\u0436\u0435\u043D \u2013 M. spicata. \u0421\u0442\u044A\u0431\u043B\u043E\u0442\u043E \u0435 \u043A\u043B\u043E\u043D\u0435\u0441\u0442\u043E,\n            \u0432\u0438\u0441\u043E\u043A\u043E \u043E\u043A\u043E\u043B\u043E 0,70 m, \u0447\u0435\u0442\u0438\u0440\u0438\u0440\u044A\u0431\u0435\u0441\u0442\u043E, \u043B\u0438\u0441\u0442\u0430\u0442\u0430 \u0441\u0430 \u043F\u0440\u043E\u0441\u0442\u0438,\n            \u043F\u0440\u043E\u0434\u044A\u043B\u0433\u043E\u0432\u0430\u0442\u0438, \u043E\u0441\u0442\u0440\u043E \u043D\u0430\u0437\u044A\u0431\u0435\u043D\u0438. \u0426\u0432\u0435\u0442\u043E\u0432\u0435\u0442\u0435 \u0441\u0430 \u0447\u0435\u0440\u0432\u0435\u043D\u0438\u043A\u0430\u0432\u043E\u0432\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u0438,\n            \u0441\u044A\u0431\u0440\u0430\u043D\u0438 \u0432 \u043A\u043B\u0430\u0441\u043E\u0432\u0438\u0434\u043D\u0438 \u0441\u044A\u0446\u0432\u0435\u0442\u0438\u044F; \u0441\u0435\u043C\u0435\u043D\u0430\u0442\u0430 \u0441\u0430 \u0434\u0440\u0435\u0431\u043D\u0438.\n            \u0412\u0441\u0438\u0447\u043A\u0438 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u0438 \u0447\u0430\u0441\u0442\u0438 \u043D\u0430 \u0440\u0430\u0441\u0442\u0435\u043D\u0438\u0435\u0442\u043E \u0441\u044A\u0434\u044A\u0440\u0436\u0430\u0442 \u0435\u0442\u0435\u0440\u0438\u0447\u043D\u043E\n            \u043C\u0430\u0441\u043B\u043E \u0441 \u0433\u043B\u0430\u0432\u043D\u0430 \u0441\u044A\u0441\u0442\u0430\u0432\u043D\u0430 \u0447\u0430\u0441\u0442 \u043C\u0435\u043D\u0442\u043E\u043B (45-65%). \u041E\u0442 \u043D\u0430\u0434\u0437\u0435\u043C\u043D\u0430\u0442\u0430 \u043C\u0430\u0441\u0430,\n            \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430 \u043E\u0442 1 \u0434\u0435\u043A\u0430\u0440, \u043F\u0440\u0438\u0431\u0440\u0430\u043D\u0430 \u0432 \u043F\u044A\u043B\u0435\u043D \u0446\u044A\u0444\u0442\u0435\u0436 \u043F\u0440\u0435\u0437 \u0441\u043B\u044A\u043D\u0447\u0435\u0432\u043E \u0432\u0440\u0435\u043C\u0435,\n            \u0441\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430 \u043F\u0440\u0438 \u043F\u0430\u0440\u043D\u0430 \u0434\u0435\u0441\u0442\u0438\u043B\u0430\u0446\u0438\u044F \u043E\u043A\u043E\u043B\u043E 3-5  kg \u0435\u0442\u0435\u0440\u0438\u0447\u043D\u043E \u043C\u0430\u0441\u043B\u043E.\n            \u0412 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F \u0441\u0435 \u043A\u0443\u043B\u0442\u0438\u0432\u0438\u0440\u0430 \u043F\u043E \u043F\u043E\u0440\u0435\u0447\u0438\u044F\u0442\u0430 \u043D\u0430 \u0440\u0435\u043A\u0438\u0442\u0435 \u041C\u0430\u0440\u0438\u0446\u0430, \u0422\u0443\u043D\u0434\u0436\u0430,\n            \u0412\u0438\u0442 \u0438 \u0434\u0440. \u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043C\u0435\u043D\u0442\u0430\u0442\u0430 \u043A\u0430\u0442\u043E \u0430\u043B\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430 \u043A\u0443\u043B\u0442\u0443\u0440\u0430 \u0441\u0435\n            \u0441\u044A\u0441\u0442\u043E\u0438 \u0432 \u043C\u0435\u043D\u0442\u043E\u0432 \u043B\u0438\u0441\u0442, \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0437\u0430 \u0438\u0437\u043D\u043E\u0441 \u0438\u043B\u0438 \u0437\u0430 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0430\n            \u043A\u0430\u0442\u043E \u0442\u0440\u0430\u043F\u0435\u0437\u0435\u043D \u0447\u0430\u0439. \u041F\u0440\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0430 \u0430\u0433\u0440\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0430 \u0438 \u043D\u0435\u043F\u043E\u043B\u0438\u0432\u043D\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F,\n            \u0434\u043E\u0431\u0438\u0432\u0438\u0442\u0435 \u0441\u0430 \u043E\u043A\u043E\u043B\u043E 150 \u2013 200 kg/da. \u041F\u0440\u0438 \u0444\u0430\u043C\u0438\u043B\u043D\u0438 \u043F\u043B\u043E\u0449\u0438 \u0441 \u043C\u0430\u043B\u044A\u043A \u0440\u0430\u0437\u043C\u0435\u0440\n            \u0438 \u043C\u043D\u043E\u0433\u043E \u0434\u043E\u0431\u0440\u043E \u0442\u043E\u0440\u0435\u043D\u0435 \u0438 \u043F\u043E\u043B\u0438\u0432\u0430\u043D\u0435, \u0434\u043E\u0431\u0438\u0432\u0438\u0442\u0435 \u0441\u0430 \u043D\u0430\u0434 300 kg/da. \u0417\u0430 \u0444\u0430\u043C\u0438\u043B\u043D\u0438\n            \u0442\u0435\u0440\u0435\u043D\u0438 \u043E\u043F\u0442\u0438\u043C\u0443\u043C\u044A\u0442 \u0435 10 \u2013 50 da. \u041F\u0440\u0438 \u0434\u043E\u0431\u0438\u0432 400 kg \u0441\u0443\u0445 \u043C\u0435\u043D\u0442\u043E\u0432 \u043B\u0438\u0441\u0442 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435\n            \u0441\u0430 \u043E\u0442 \u043F\u043E\u0440\u044F\u0434\u044A\u043A\u0430 \u043D\u0430 640 \u2013 800 \u043B\u0432. \u0431\u0440\u0443\u0442\u043E \u0434\u043E\u0445\u043E\u0434 \u043E\u0442 \u0434\u0435\u043A\u0430\u0440, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442 \u043E\u0442 \u0446\u0435\u043D\u0430\u0442\u0430\n            \u043D\u0430 \u0438\u0437\u043A\u0443\u043F\u0443\u0432\u0430\u043D\u0435 \u043F\u043E \u0432\u0440\u0435\u043C\u0435 \u043D\u0430 \u0441\u0435\u0437\u043E\u043D\u0430.",
                            "ph": "7.0 - 8.0",
                            "dishes": [{ name: 'Мохито', img_name: "mohito" }, { name: 'Табуле с мента', img_name: "mint_tabule" }]
                        },
                        {
                            "name": "репичка",
                            "en_name": "radish",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Салата от репички', img_name: "radish_salad" }, { name: 'Репички с авокадо', img_name: "radish_avocado" }]
                        },
                        {
                            "name": "магданоз",
                            "en_name": "parsley",
                            "category": "plant",
                            "description": "",
                            "ph": "5.0 - 7.0",
                            "dishes": [{ name: 'Кюфтета от магданоз', img_name: "parsley-balls" }, { name: 'Табуле', img_name: "tabule" }]
                        },
                        {
                            "name": "риган",
                            "en_name": "oregano",
                            "category": "plant",
                            "ph": "6.0 - 8.0",
                            "dishes": [{ name: 'Гръцка салата', img_name: "greek-salad" }, { name: 'Пиле с риган', img_name: "oregano-chicken" }]
                        },
                        {
                            "name": "лук",
                            "en_name": "onion",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Салата с пресен лук', img_name: "fresh-onion-salad" }, { name: 'Яйца с лук', img_name: "onion-eggs" }]
                        },
                        {
                            "name": "латинка",
                            "en_name": "nasturtium",
                            "category": "plant",
                            "ph": "5.5-7.5",
                            "dishes": [{ name: 'Салата с латинка', img_name: "latinka-salad" }, { name: 'Песто с латинка', img_name: "latinka-pesto" }]
                        },
                        {
                            "name": "синап",
                            "en_name": "sinapis",
                            "category": "plant",
                            "ph": "6.5 - 6.8",
                            "dishes": [{ name: 'Горчица', img_name: "mustard" }, { name: 'Пица "Рустика"', img_name: "rustica_pizza" }]
                        },
                        {
                            "name": "мащерка",
                            "en_name": "thymus",
                            "category": "plant",
                            "description": "",
                            "ph": "5.5 - 7.0",
                            "dishes": [{ name: 'Ориз с мащерка', img_name: "thyme-rice" }, { name: 'Пиле с мащерка', img_name: "thyme-chicken" }]
                        },
                        {
                            "name": "манголд",
                            "en_name": "chard",
                            "category": "plant",
                            "ph": "6.0 - 6.8",
                            "dishes": [{ name: 'Топла салата с манголд', img_name: "warm-mangold-sald" }, { name: 'Тофу с манголд', img_name: "mangold-tofu" }]
                        },
                        {
                            "name": "слънчоглед",
                            "en_name": "sunflower",
                            "category": "plant",
                            "specific": "sprout",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Златно цветкло със слънчогледени кълнове', img_name: "golden-beet-sunflower-salad" }, { name: 'Салата със слънчогледови кълнове', img_name: "sunflower-sprout-salad" }]
                        },
                        {
                            "name": "чубрица",
                            "en_name": "savory",
                            "category": "plant",
                            "ph": "6.7 - 7.3",
                            "dishes": [{ name: 'Лятна брускета', img_name: "savory-brusceta" }, { name: 'Вегитариански Киш', img_name: "savory-quiche" }]
                        },
                        {
                            "name": "житняк",
                            "en_name": "agropyron",
                            "category": "plant",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Смути', img_name: "wheatgrass-smoothie" }, { name: 'Фреш с цвекло и житняк', img_name: "wheatgrass-beet-cucumber" }]
                        },
                        {
                            "name": "sage",
                            "en_name": "sage",
                            "category": "plant",
                            "description": "",
                            "ph": "5.5 - 6.5",
                            "dishes": [{ name: 'Свинско със Sage', img_name: "sage-pork" }, { name: 'Брюкселско зеле със Sage', img_name: "sage-bruccells" }]
                        },
                        {
                            "name": "грах",
                            "en_name": "pea",
                            "category": "plant",
                            "specific": "sprout",
                            "description": "",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Пържени грахови кълнове', img_name: "fry-pea-sprouts" }, { name: 'Салата от грахови кълнове', img_name: "pea-shoots-salad" }]
                        },
                        {
                            "name": "маруля",
                            "en_name": "lettuce",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Зелена салата', img_name: "green-saald" }, { name: 'Сърми с маруля', img_name: "lettuce-wraps" }]
                        },
                        {
                            "name": "леща",
                            "en_name": "lentil",
                            "category": "plant",
                            "description": "",
                            "ph": "5.5 - 7.0",
                            "dishes": [{ name: 'Кълнове от леща с манго', img_name: "lentil-mango" }, { name: 'Кълнове от леща с булгур', img_name: "lentil-bulger" }]
                        },
                        {
                            "name": "маточина",
                            "en_name": "balm",
                            "category": "plant",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Студен чай', img_name: "lemon-balm-ice-tea" }, { name: 'Торта', img_name: "lemon-balm-cake" }]
                        },
                        {
                            "name": "komatsuna",
                            "en_name": "komatsuna",
                            "category": "plant",
                            "ph": "5.5 - 6.5",
                            "dishes": [{ name: 'Тофу', img_name: "komatsuna-tofu" }, { name: 'Салата с Komatsuna', img_name: "komatsuna-salad" }]
                        },
                        {
                            "name": "сминдух",
                            "en_name": "fenugreek",
                            "category": "plant",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Шарена сол', img_name: "sharena_sol" }, { name: 'Салата от кълнове на сминдух', img_name: "sminduh-salad" }]
                        },
                        {
                            "name": "лен",
                            "en_name": "linum",
                            "category": "plant",
                            "ph": "5.0 - 7.0",
                            "dishes": [{ name: 'Хляб', img_name: "linen-bread" }, { name: 'Крекери', img_name: "linen-kreker" }]
                        },
                        {
                            "name": "къдрaвo зеле",
                            "en_name": "kale",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Маринована салата', img_name: "kale-marinated-salad" }, { name: 'Kъдраво зеле със наденица', img_name: "sausage-kale-saute-polenta" }]
                        },
                        {
                            "name": "копър",
                            "en_name": "dill",
                            "category": "plant",
                            "ph": "5.5 - 7.5",
                            "dishes": [{ name: 'Таратор', img_name: "tarator" }, { name: 'Сиренки', img_name: "cheese-dill" }]
                        },
                        {
                            "name": "сибирски лук",
                            "en_name": "chives",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Картофено пюре със сибирски лук', img_name: "patatoes-chives" }, { name: 'Сьомга със сибирски лук', img_name: "almond-salmon-chives" }]
                        },
                        {
                            "name": "кориандър",
                            "en_name": "cilantro",
                            "category": "plant",
                            "ph": "6.5 - 7.5",
                            "dishes": [{ name: 'Пиле с кориандър', img_name: "chicken_coriander" }, { name: 'Картофена супа с кориандър', img_name: "coriander-soup" }]
                        },
                        {
                            "name": "зеле",
                            "en_name": "cabbage",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.5",
                            "dishes": [{ name: 'Свинско със зеле', img_name: "pork-cabbage" }, { name: 'Капрезе', img_name: "apples-cabagge" }]
                        },
                        {
                            "name": "елда",
                            "en_name": "fagopyrum",
                            "category": "plant",
                            "ph": "6.0 - 6.5",
                            "dishes": [{ name: 'Шоколадови бисквити с елда', img_name: "buckwheat_choco_chip_cookies" }, { name: 'Ризото с елда', img_name: "buckwheat-risotto" }]
                        },
                        {
                            "name": "броколи",
                            "en_name": "broccoli",
                            "category": "plant",
                            "description": "",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Пюре с броколи', img_name: "broccoli-potatoes" }, { name: 'Спагети с броколи', img_name: "broccoli-pasta" }]
                        },
                        {
                            "name": "цвекло",
                            "en_name": "beet",
                            "category": "plant",
                            "specific": "sprout",
                            "ph": "6.2 - 7.0",
                            "dishes": [{ name: 'Салата с кълнове цвекло', img_name: "beet-sprouts-salad" }, { name: 'Пица с кълнове цвекло', img_name: "pizza-beet-sprouts" }]
                        },
                        {
                            "name": "рукола",
                            "en_name": "rucola",
                            "category": "plant",
                            "ph": "6.0 - 7.0",
                            "dishes": [{ name: 'Рукола с репички', img_name: "radish-rukola-salad" }, { name: 'Рукола с айсберг', img_name: "rukola-iceberg" }]
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
