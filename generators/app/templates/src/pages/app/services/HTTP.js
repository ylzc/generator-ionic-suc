import {app} from "../app";

app
    .service("HTTP", (API,$http,$q) => {

        function check(params) {
            let defer = $q.defer();

            if(ionic.Platform.isWebView())
            {
                $http
                    .post(API.login(),{params})
                    .then((data)=>{
                        if(data.indexOf('th:action="@{/login}"')>-1)
                        {
                            defer.reject({'myErr':"登录失败"})
                        }
                        else
                        {
                            defer.resolve(data);
                        }
                    })
                    .catch(error=>{
                        defer.reject(error)
                    })
            }
            else
            {
                defer.resolve({
                    message:"登录成功",
                })
            }

            return defer.promise;
        }

        return {
            get:$http.get,
            post:$http.post,
            check:check
        }
    })