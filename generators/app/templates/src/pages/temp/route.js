import {app} from "../../app/app";
import temp from "./temp.html";

app
    .config(($stateProvider)=> {
        $stateProvider
            .state("temp",{
                url:"/temp",
                template:temp
            })
    });