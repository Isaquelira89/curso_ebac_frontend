module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task: sass
    less: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
            "build/styles/main.css": "src/styles/main.less"
        }
      }
    },
    uglify: {
      build: {
        src: 'src/script/main.js',
        dest: 'build/scripts/main.min.js'
      }
    },
    // Task: watch
    watch: {
      css: {
        files: '**/*.less',
        tasks: ['less']
      }
    }
  });
  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s)
  grunt.registerTask('default', ['less', 'uglify', 'watch']);
}