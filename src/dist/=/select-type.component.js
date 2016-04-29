System.register(['../../../node_modules/angular2/core.d'], function(exports_1, context_1) {
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
    var core_d_1;
    var SelectTypeComponent;
    return {
        setters:[
            function (core_d_1_1) {
                core_d_1 = core_d_1_1;
            }],
        execute: function() {
            SelectTypeComponent = (function () {
                function SelectTypeComponent() {
                    this.select = new core_d_1.EventEmitter();
                    this.types = [
                        { name: "Всички категории", value: "all" },
                        { name: "Растения", value: "plant" },
                        { name: "Парници", value: "greenhouse" },
                        { name: "Консумативи", value: "consumables" }
                    ];
                }
                SelectTypeComponent.prototype.ngOnInit = function () {
                    this.select.emit(this.types[0]);
                };
                __decorate([
                    core_d_1.Output(), 
                    __metadata('design:type', Object)
                ], SelectTypeComponent.prototype, "select", void 0);
                SelectTypeComponent = __decorate([
                    core_d_1.Component({
                        selector: "sg-select-type",
                        template: "\n        <select #sel (change)=\"select.emit($event.target.value)\">\n             <option *ngFor=\"#type of types\" [value]=\"{{type.value}}\">{{type.name}}</option>\n        </select>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectTypeComponent);
                return SelectTypeComponent;
            }());
            exports_1("SelectTypeComponent", SelectTypeComponent);
        }
    }
});
