/* global requirejs */
'use strict';
requirejs.config({
    baseUrl: 'bower_components/',
    paths: {
        'backbone'                  :   'backbone/backbone',

        'jquery'                    :   'jquery/dist/jquery',
        'underscore'                :   'lodash/dist/lodash',
        'bootstrap'                 :   'bootstrap/dist/js/bootstrap',
        'tenacity'                  :   'tenacity/dist/tenacity',

        // My Application
        'main'                      :   '../scripts/main',
        'application'               :   '../scripts/application',
        'appRoutes'                 :   '../scripts/appRoutes',
        'templates'                 :   '../scripts/helpers/templates',
        'templatesRaw'              :   '../scripts/templates',
        'events'                    :   '../scripts/helpers/events',
        'pubsub'                    :   '../scripts/helpers/pubsub',
        'modules'                   :   '../scripts/helpers/modules',

        'myFirstComponent'          :   '../scripts/components/myFirstComponent'
    },
    shim: {
        tenacity: {
            deps: ['backbone'],
            exports:'tenacity'
        }
    }
});
