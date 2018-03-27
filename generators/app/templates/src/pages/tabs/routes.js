import {app} from "../app/app";
import tabs from "./tabs.html";
import {view as mine} from "../mine";

app
    .config(($stateProvider) => {

        $stateProvider
            .state("tabs", {
                url: "/tabs",
                template: tabs
            })
            .state(mine.name, mine.config)

    });