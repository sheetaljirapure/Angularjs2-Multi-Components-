System.register(['angular2/platform/browser', './main.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, main_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            }],
        execute: function() {
            /* Bootstrap the root component without any module dependencies */
            browser_1.bootstrap(main_component_1.mainComponent, []); // setting MainComponent as start component
        }
    }
});
// main{
//     employee emp=new employee();
// } 
//# sourceMappingURL=boot.js.map