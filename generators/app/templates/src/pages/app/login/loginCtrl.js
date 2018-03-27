import {app} from "../app";

app
    .controller("loginCtrl", ($scope,HTTP) => {
        $scope.check = ()=>{
            //登录
            HTTP
                .check({})
                .then((data)=>{
                    console.log(data)
                })
        }
    })