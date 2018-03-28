import {app} from "../app";

app
    .service("appHelper", function ($cordovaToast) {

        return {
            isEmpty: function (input) {
                if (angular.isArray(input)) {
                    return input.length == 0;
                }
                else if (typeof (input) === 'string') {
                    return input === ""
                }
                else if (input === null) {
                    return true;
                }
                else if (input === undefined) {
                    return true;
                }

                return false;
            },
            toast: function (message) {
                if (window.$$appConfig.appType == 'debug') {
                    alert(message)
                }
                else {
                    $cordovaToast
                        .showWithOptions({
                            message: message,
                            duration: "long",
                            position: "bottom",
                            addPixelsY: -150
                        });
                }
            },
        }

    })