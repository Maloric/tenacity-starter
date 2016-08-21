'use strict';
define(['tenacity', 'jquery', 'underscore', 'pubsub', 'myFirstComponent'],
    function(Tenacity, $, _, PubSub, MyFirstComponent) {
        testSetup('My first component', function() {
            beforeEach(function() {
                this.unit = new MyFirstComponent({
                    el: '#content'
                });
            });

            it('can be instantiated', function() {
                expect(this.unit).to.not.equal(undefined);
                expect(this.unit.$el.is(':visible')).to.equal(true, 'Unit is visible');
                expect(this.unit.$el.html()).to.equal('This is my first component', 'Template is rendered');
            });
        });
    });
