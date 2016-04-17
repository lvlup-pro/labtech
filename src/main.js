require('./main.css');

//for hiding sidenav after click
require("font-awesome-webpack");
//require("../node_modules/materialize-css/dist/css/materialize.css")
require("../node_modules/materialize-css/dist/js/materialize.js")
require("../assets/date.format.js")

//customize right top dropdown
setTimeout(function () {
    jQuery(".dropdown-button").dropdown({hover: false, belowOrigin: true, constrain_width: false, alignment: 'right'});
}, 1);

//detect if browser is native android browser
//var ua = navigator.userAgent;
//var is_native_android = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
//if (is_native_android) {
//    alert("")
//}

//=== VUE ===
var Vue = require('vue');
var i18n = require('vue-i18n');

var Router = require('vue-router');
Vue.use(Router);

var Resource = require('vue-resource');
Vue.use(Resource);

window.locale = {en: {}, pl: {}};
require('./locales/en.js');
require('./locales/pl.js');

var browserLanguage = require('in-browser-language');
var pickLanguage = browserLanguage.pick(['en', 'pl'], 'en');
Vue.use(i18n, {
    lang: pickLanguage,
    locales: window.locale
});
//Vue.config.lang = 'en'; //force language

var root = Vue.extend({
    components: require('./components'),
    data: function () {
        return {
            config: false,
            logged: false,
            router: router,
            email: '',
            title: '',
            menu: [
            ]
        }
    },
    methods: {
        routeContains: function (name) {
            var path = this.route.path;
            if (path.indexOf(name) != -1) {
                return true;
            }
            return false;
        },
        getConfig: function () {
            this.$http.get('config.json', function (data) {
                this.config = data;
                window.config = data;
            });
        }
    },
    ready: function () {
        this.getConfig();
    }
});

var router = new Router({
    root: '/',
    hashbang: false
});
router.map(require('./routes'));
router.start(root, 'html');
