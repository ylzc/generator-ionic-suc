import {app} from "../../app/app";

app
    .controller("loginCtrl", ($scope,HTTP,$state,$ionicViewSwitcher) => {
        $scope.check = ()=>{
            //登录
            HTTP
                .check({})
                .then((data)=>{
                    $ionicViewSwitcher
                        .nextDirection("forward");
                    $state.go("tabs.mine")
                })
        }
    })