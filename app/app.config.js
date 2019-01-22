(function () {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/example');
        $stateProvider

            .state('home', {
                name: 'home',
                url: '/home',
                template: 'Home'
            })

            .state('example', {
                name: 'example',
                url: '/example',
                templateUrl: 'app/example/example.html'
            })

    }
})();