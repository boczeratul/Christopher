'use strict';

module.exports = function (grunt) {
    // Register tasks
    grunt.loadTasks('grunt');

    grunt.registerTask('booking', ['protractor']);
};