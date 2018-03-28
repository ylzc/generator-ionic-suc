import {app} from "../../app/app";

app
    .controller("tempCtrl", ($scope, $state, $timeout, $ionicViewSwitcher) => {

        $timeout(() => {
            $ionicViewSwitcher.nextDirection("none");
            $state.go('login');
        }, 100)

    })