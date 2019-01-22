(function () {
    "use strict";

    angular
        .module("myApp")
        .controller("exampleController", ExampleController);

    ExampleController.$inject = ["$scope", "$window"];

    function ExampleController($scope, $window) {

        var vm = this;
        vm.sketchTest = sketchTest;

        _render();

        function _render() {
        };

        ////////////////

        function sketchTest() {
            var s = function (sketch) {
                sketch.setup = function () {
                    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
                };
                sketch.draw = function () {
                    if (sketch.mouseIsPressed) {
                        sketch.fill(0);
                    } else {
                        sketch.fill(255);
                    }
                    sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
                };
            };
            var myp5 = new p5(s);
        };       
        
    }      
})();