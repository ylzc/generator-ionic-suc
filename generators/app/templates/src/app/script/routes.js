import {app} from "../app";

app
    .config(($stateProvider, $urlRouterProvider, $ionicConfigProvider, $locationProvider) => {
        $ionicConfigProvider.templates.maxPrefetch(5);
        $locationProvider.hashPrefix("")
        $urlRouterProvider
            .otherwise("/temp")
    });