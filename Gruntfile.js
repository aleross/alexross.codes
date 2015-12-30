module.exports = function(grunt) {

    // load grunt config
    require('load-grunt-config')(grunt, {
        init: true,
        jitGrunt: {
            staticMappings: {
                'includereplace': 'grunt-include-replace'
            }
        }
    });
};
