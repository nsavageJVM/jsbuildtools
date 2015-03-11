module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      // Metadata.
      meta: {
          basePath: '/',
          srcPath: 'scripts/',
          deployPath: 'app/'
      },


      concat: {
      app: {
        src: ["<%= meta.srcPath %>entrypoint.js",
              "<%= meta.srcPath %>controllers/tableController.js",
              "<%= meta.srcPath %>factories/tableFactories.js",
              "<%= meta.srcPath %>directives/tableDirective.js",
              "<%= meta.srcPath %>staticdata/staticConstants.js",],
        dest: '<%= meta.deployPath %>app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};