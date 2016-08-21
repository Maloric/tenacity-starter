'use strict';
define([
    'tenacity',
    'jquery',
    'pubsub'
], function(
    Tenacity,
    $,
    PubSub,
) {
    if(Tenacity.Config.get('enableDebugger')) {
        new Tenacity.DebugComponent();
    }
});
