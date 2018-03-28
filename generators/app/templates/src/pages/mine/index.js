let view = {
    name:"tabs.mine",
    config:{
        url:"/mine",
        views:{
            mine:{
                templateProvider: function ($q) {
                    'ngInject';
                    let deferred = $q.defer();
                    require.ensure([], (require) => {
                        require("./mine.scss");
                        let template = require('./mine.html');
                        deferred.resolve(template);
                    }, 'mine');
                    return deferred.promise;
                },
            }
        },
        resolve: {
            'mineModule': function ($q, $ocLazyLoad) {
                'ngInject';
                let deferred = $q.defer();
                require.ensure([], require => {
                    require('./mineCtrl.js');
                    $ocLazyLoad.load({
                        name: "mine"
                    });
                    deferred.resolve();
                }, 'temp');
                return deferred.promise;
            }
        }
    }
}

export {
    view
}