module.exports = {
    template: require('./template.html'),
    replace: true,
    ready: function () {
        this.$root.$set('title', '404');
        jQuery('.button-collapse').sideNav('hide');
    }
}