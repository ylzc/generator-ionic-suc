import "./ionic-cordova/src/plugins/toast";

const name = 'myCordova';
angular
    .module(name, [
        'ionCordova.plugins.toast',
    ])

export default name;
