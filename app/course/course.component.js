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
    var mainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let mainComponent = class mainComponent {
                constructor() {
                    this.click = function () {
                        alert("Hello  this angular 2");
                    };
                    this.read = {};
                    this.courses = [
                        { id: 1, name: "Angular 2", cost: 250, duration: "24 hrs" },
                        { id: 2, name: "Angular 2", cost: 350, duration: "24 hrs" },
                        { id: 3, name: "Angular 2", cost: 250, duration: "24 hrs" },
                        { id: 4, name: "Angular 2", cost: 250, duration: "24 hrs" },
                        { id: 5, name: "Angular 2", cost: 250, duration: "24 hrs" }
                    ];
                    this.course = ['Angular2', 'Java', 'JavaScript', 'Type Script'];
                    this.title = "Welcome to endurekha";
                    this.msg = "this the paragraph msg";
                    this.read = {
                        id: 1,
                        name: "Angular",
                        cost: 123,
                        duration: "24"
                    };
                }
                ;
            };
            mainComponent = __decorate([
                core_1.Component({
                    selector: 'course-copm',
                    templateUrl: `course/course.tpl.html`,
                    styleUrls: ['course/course.style.css']
                }), 
                __metadata('design:paramtypes', [])
            ], mainComponent);
            exports_1("mainComponent", mainComponent);
        }
    }
});
//# sourceMappingURL=course.component.js.map