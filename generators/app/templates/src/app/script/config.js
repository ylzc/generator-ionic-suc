import {app} from "../app";

app
    .config(function ($ionicConfigProvider, $sceDelegateProvider) {
        $ionicConfigProvider.views.transition('android');
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');
        $ionicConfigProvider.form.checkbox("circle"); //"circle"
        $ionicConfigProvider.form.toggle("large");
        $ionicConfigProvider.scrolling.jsScrolling(true);
        $ionicConfigProvider.views.forwardCache(false);
        $ionicConfigProvider.views.swipeBackEnabled(false);
    })
    .constant('$ionicLoadingConfig', {
        template: '<ion-spinner></ion-spinner>',
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        showDelay: 0,
        duration: 10000
    })