import {app} from "../app";

app
    .directive('showTabs', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {

                scope.$on('$ionicView.beforeEnter', function() {
                    scope.$watch(attributes.showTabs, function(value){
                        $rootScope.showTabs = value;
                    });
                });

                scope.$on('$ionicView.beforeLeave', function() {
                    $rootScope.showTabs = false;
                });
            }
        };
    });