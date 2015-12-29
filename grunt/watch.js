module.exports = {
    options: {
        livereload: false
    },
    html: {
        files: ['*.html'],
        options: { livereload: true }
    },
    sass: {
        files: ['src/sass/*.scss'],
        tasks: ['sass']
    },
    css: { // CSS hot-swapping
        files: ['dist/*.css'],
        options: { livereload: true }
    }
};
