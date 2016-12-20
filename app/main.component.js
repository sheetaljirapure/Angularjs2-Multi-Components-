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
                    this.course = ['Angular2', 'Java', 'JavaScript', 'Type Script'];
                    this.title = "Welcome to My first App";
                    this.msg = "this the paragraph msg";
                }
                ;
            };
            mainComponent = __decorate([
                core_1.Component({
                    selector: 'main-app',
                    directives: `[CourseComponent]`,
                    template: `<h1>{{title}}</h1>
    <p>{{msg}}</p>
    <button (click)="click()">Click Me    </button>
    <h4 *ngFor ="#v of course">{{v}}</h4>
    <ul>
        <li *ngFor="#f of course">{{f}}</li>

    </ul>`
                }), 
                __metadata('design:paramtypes', [])
            ], mainComponent);
            exports_1("mainComponent", mainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map