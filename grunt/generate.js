module.exports = function (grunt) {
    'use strict';

    function getTitle(filename) {
        var title,
            page = filename.split('.')[0];
        if (page === 'index') {
            title = 'Home';
        } else {

            // Turn filename into title
            title = page.charAt(0).toUpperCase() + page.slice(1);
        }

        return title + ' - Alex Ross'
    }

    grunt.registerTask('generate', 'Generates web pages', function () {

        var layout = grunt.file.read('src/html/layout.html');

        grunt.file.recurse('src/html/pages', function (abspath, rootdir, subdir, filename) {
            if (grunt.file.isFile(abspath)) {
                grunt.log.writeln('Reading file:' + filename);
                var content = grunt.file.read(abspath),
                    title = getTitle(filename),
                    newFile = layout.replace('@@page', content).replace('@@title', title);
                grunt.file.write(filename, newFile);
            }
        });

        // Pretty up indentation
        grunt.task.run('prettify');
    });
};
