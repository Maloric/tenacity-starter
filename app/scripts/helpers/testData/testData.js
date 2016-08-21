'use strict';
define(['underscore'],
function(_) {
    var data = {

    };

    return {
        copy: function(path) {
            var res = _.cloneDeep(_.get(data, path), true);
            return res;
        }
    };
});
