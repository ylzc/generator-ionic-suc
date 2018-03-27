import "ionic-webpack";
import "oclazyload/dist/modules/ocLazyLoad.core";
import "oclazyload/dist/modules/ocLazyLoad.loaders.core";
import "../../services/myCordova";

const app = angular
    .module("sucsoft", [
        "ionic",
        "oc.lazyLoad",
        "myCordova"
    ])

export {app}

