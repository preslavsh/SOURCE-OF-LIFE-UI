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
    var SelectTypeDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SelectTypeDirective = (function () {
                function SelectTypeDirective() {
                    this.select = new core_1.EventEmitter();
                    this.types = [
                        { name: "Всички категории", value: "all" },
                        { name: "Растения", value: "plant" },
                        { name: "Парници", value: "greenhouse" },
                        { name: "Консумативи", value: "consumables" }
                    ];
                }
                SelectTypeDirective.prototype.ngOnInit = function () {
                    this.select.emit(this.types[0].value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SelectTypeDirective.prototype, "select", void 0);
                SelectTypeDirective = __decorate([
                    core_1.Component({
                        selector: "sg-select-type",
                        template: "\n        <select #sel (change)=\"select.emit($event.target.value)\" class=\"form-control search_plant sel-plant block-display filter-width\">\n             <option *ngFor=\"#type of types\" value=\"{{type.value}}\">{{type.name}}</option>\n        </select>\n    ",
                        styleUrls: ['./styles/shop.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectTypeDirective);
                return SelectTypeDirective;
            }());
            exports_1("SelectTypeDirective", SelectTypeDirective);
        }
    }
});
