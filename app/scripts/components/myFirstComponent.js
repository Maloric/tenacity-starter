define(['tenacity', 'pubsub', 'events', 'templates'], function(Tenacity, PubSub, Events) {
    return Tenacity.Component.extend({
        template: 'app/scripts/templates/myFirstComponent.ejs',
        events: {
            'myTestEvent': 'myTestEventHandler'
        },

        myTestEventHandler: function(data) {
            PubSub.publish(Events.MySecondTestEvent, data);
        }
    });
});