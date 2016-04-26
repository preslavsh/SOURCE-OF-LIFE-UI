System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Greenhouse;
    return {
        setters:[],
        execute: function() {
            Greenhouse = (function () {
                function Greenhouse(id, name, plants) {
                    this.id = id;
                    this.name = name;
                    this.plants = plants;
                }
                return Greenhouse;
            }());
            exports_1("Greenhouse", Greenhouse);
        }
    }
});
