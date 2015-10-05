require('./style.css');
setInterval(function () {
    jQuery('.collapsible').collapsible();
}, 500);
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            loading: true,
            services:
                    {
                        "...": {
                            "nodes": [
                            ]
                        }
                    }
        }
    },
    ready: function () {
        this.$root.$set('title', this.$t("general.header"));
        jQuery('.button-collapse').sideNav('hide');
        this.getServers();
        window.interval = setInterval(this.getServers, 10000);
    },
    filters: {
        //http://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
        //http://stackoverflow.com/a/3177838/1351857
        timeSince: function (date) {
            var seconds = Math.floor((new Date() - date) / 1000);
            var interval = Math.floor(seconds / 31536000);
            if (interval > 1)
            {
                return interval + " lat";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1)
            {
                return interval + " miesięcy";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1)
            {
                return interval + " dni";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1)
            {
                return interval + " godzin";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1)
            {
                return interval + " minut";
            }
            return Math.floor(seconds) + " sekund";
        },
        formatDate: function (value) {
            var d = new Date(value);
            return d.format('yyyy-mm-dd HH:MM:ss')
        },
        countAllHosts: function (hosts) {
            return hosts.length;
        },
        countOnlineHosts: function (hosts) {
            var counter = 0;
            for (var key in hosts) {
                var obj = hosts[key];
                if (obj.online || obj.info)
                {
                    counter++;
                }
            }
            return counter;
        }
    },
    methods: {
        checkIfAllHostsAreOnline: function (hosts)
        {
            var online = 0;
            for (var key in hosts) {
                var obj = hosts[key];
                if (obj.online || obj.info)
                {
                    online++;
                }
            }
            var len = hosts.length;
            if (len == online && len != 0 && online != 0)
            {
                return true;
            }
        },
        checkIfAllHostsAreOffline: function (hosts)
        {
            var online = 0;
            for (var key in hosts) {
                var obj = hosts[key];
                if (obj.online || obj.info)
                {
                    online++;
                }
            }
            var len = hosts.length;
            if (online === 0)
            {
                return true;
            }
        },
        checkIfSomeHostsAreOnline: function (hosts)
        {
            var online = 0;
            for (var key in hosts) {
                var obj = hosts[key];
                if (obj.online || obj.info)
                {
                    online++;
                }
            }
            var len = hosts.length;
            if (len != online && len != 0 && online != 0)
            {
                return true;
            }
        },
        getServers: function () {
            this.loading = true;
            //this.$http.get('/hosts.json', function (data) {
            this.$http.get('hosts.json', function (data) {
                this.services = data;
                setTimeout(function () {
                    jQuery('.collapsible').collapsible();
                }, 500);
                this.loading = false;
            });
        }
    },
    beforeDestroy: function () {
        clearInterval(window.interval);
    }
};
