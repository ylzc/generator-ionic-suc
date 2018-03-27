import {app} from "../app";
import login from "./login.html";

app
    .config(($stateProvider)=> {
        $stateProvider
            .state("login",{
                url:"/login",
                template:login
            })
    });