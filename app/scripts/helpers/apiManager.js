'use strict';
define(['tenacity', 'events', 'jquery'], function(Tenacity, Events, $) {
    var apiManager = Tenacity.EventExtender.extend({
        events: {
            // 'EventName': 'EventHandlerName'
        },

        initialize: function() {
            Tenacity.EventExtender.prototype.initialize.apply(this);
            return this;
        },

        destroy: function() {
            Tenacity.EventExtender.prototype.destroy.apply(this);
            $(this.connection).unbind('onStateChanged');
            $(this.connection).unbind('onError');
        }
    });
    return apiManager;
});
