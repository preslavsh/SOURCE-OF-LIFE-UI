System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Plant;
    return {
        setters:[],
        execute: function() {
            Plant = (function () {
                function Plant(name, en_name, ph, description, water, sun, dishes) {
                    this.name = name;
                    this.en_name = en_name;
                    this.ph = ph;
                    this.description = description;
                    this.water = water;
                    this.sun = sun;
                    this.dishes = dishes;
                }
                Plant.empty = function () {
                    return new Plant("", "", "", "", "", "");
                };
                return Plant;
            }());
            exports_1("Plant", Plant);
        }
    }
});
