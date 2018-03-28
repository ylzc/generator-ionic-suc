import {app} from "../../app/app";
import tabs from "./tabs.html";
import {view as mine} from "../mine";

app
    .config(($stateProvider,$urlRouterProvider) => {

        $stateProvider
            .state("tabs", {
                url: "/tabs",
                abstract:true,
                template: tabs
            })
            .state(mine.name, mine.config)

        $urlRouterProvider
            .when("/tabs","/tabs/mine")

    });