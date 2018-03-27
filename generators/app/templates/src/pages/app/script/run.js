import {app} from "../app";

app
    .run(($ionicPlatform, $rootScope, $interval, $timeout, $window, $cordovaToast,IONIC_BACK_PRIORITY) => {

        $ionicPlatform
            .registerBackButtonAction((e) => {
                $rootScope.backBtnClick()
            }, IONIC_BACK_PRIORITY.view);

        $rootScope.exitPopup = {
            isShow: false,
            time: 0
        }

        $rootScope.backBtnClick = function () {
            if ($rootScope.exitPopup.time === 0) {
                $cordovaToast
                    .showWithOptions({
                        message: "再按一次退出",
                        duration: "long",
                        position: "bottom",
                        addPixelsY: -150
                    });
                $rootScope.exitPopup.time = 1;
                $timeout(function () {
                    $rootScope.exitPopup.time = 0;
                }, 1000)
            }
            else if ($rootScope.exitPopup.time === 1) {
                window.ionic.Platform.exitApp();
            }
        }

        $ionicPlatform.ready(function () {
            if ($window.cordova && $window.cordova.plugins.Keyboard) {
                $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                $window.cordova.plugins.Keyboard.disableScroll(true);
            }
            if ($window.StatusBar) {
                $window.StatusBar.styleDefault();
            }
        });

    })