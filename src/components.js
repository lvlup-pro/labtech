module.exports = {
    /* Home */
    'home': function (resolve) {
        require(['./views/home'], resolve)
    },
    /* Misc */
    '404': function (resolve) {
        require(['./views/404'], resolve)
    },
    'sidebar-menu': function (resolve) {
        require(['./views/sidebar-menu'], resolve)
    }
}