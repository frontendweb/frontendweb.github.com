module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bake: {
        build: {
            files: {
                "index.html": "app/base/index.html",
                "intro.html": "app/base/intro.html",
                "faq.html": "app/base/faq.html",
                "lesson1.html": "app/base/lesson1.html",
                "lesson2.html": "app/base/lesson2.html",
                "lesson3.html": "app/base/lesson3.html",
                "lesson4.html": "app/base/lesson4.html",
                "lesson5.html": "app/base/lesson5.html",
                "lesson6.html": "app/base/lesson6.html",
                "lesson7.html": "app/base/lesson7.html",
                "lesson8.html": "app/base/lesson8.html",
                "resources.html": "app/base/resources.html",
                "updates.html": "app/base/updates.html",
                "sites.html": "app/base/sites.html",
                "tutorial.html": "app/base/tutorial.html",
            }
        }
    }
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks( "grunt-bake" );

  // Default task(s).
  grunt.registerTask('default', []);

};