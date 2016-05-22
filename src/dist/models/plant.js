System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Plant;
    return {
        setters:[],
        execute: function() {
            Plant = (function () {
                function Plant(name, en_name, ph, dishes) {
                    this.name = name;
                    this.en_name = en_name;
                    this.ph = ph;
                    this.dishes = dishes;
                }
                return Plant;
            }());
            exports_1("Plant", Plant);
        }
    }
});
