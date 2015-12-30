module.exports = {
    options: {
        livereload: false
    },
    html: {
        files: ['src/html/**/*.html'],
        tasks: ['generate'],
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
