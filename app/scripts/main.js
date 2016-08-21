'use strict';
require(['tenacity', 'pubsub', 'apiManager', 'appRoutes', 'modules'
], function(Tenacity, PubSub, ApiManager, appRoutes) {
    require(['jquery', 'bootstrap']);

    var initCallback = function() {
        var self = this;
        PubSub.subscribe(Tenacity.Events.ConnectionReady, function() {
            self.initRouter(appRoutes);
        });
    };

    var destroyCallback = function() {
        PubSub.unsubscribe(this.initRouter);
    };

    var application = new Tenacity.App({
        useFakeApiManager: false,
        apiManager: ApiManager,
        initCallback: initCallback,
        destroyCallback: destroyCallback
    });
    return application;
});
