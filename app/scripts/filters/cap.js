define(['filters/module'], function(mod) {
    mod.filter('cap', function() {
        return function(input) {
            if (input) {
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    })
})