import {app} from "../app";

app
    .controller("tempCtrl", ($scope, $state, $timeout, $ionicViewSwitcher) => {

        $timeout(() => {
            $ionicViewSwitcher.nextDirection("none");
            $state.go('login');
        }, 100)

    })