import {app} from "../app";

app
    .controller("appCtrl", ($scope, $rootScope, $timeout) => {
        $rootScope.olMap = {};
        $timeout(function () {
            angular.extend(
                $rootScope.olMap,
                window.$$appConfig.olMapDefault
            );
        }, 0)
    })