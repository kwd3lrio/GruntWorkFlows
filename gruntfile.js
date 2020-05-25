module.exprts = function(grunt){
  
  // Configure the various tasks and plugins that we'll be using
  grunt.initConfig({
    
    concat : {
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'            
      }
    },  
    
    'uglify': { 
      'development': { 
        'files': {
          'build/app.min.js': ['src/app.js', 'src/lib.js']
        } 
      } //END Development
    } // END Uglify task code

  }); //initConfig


  //function Loads your task to the Node Package Manager (NPM)
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  //function Publishes your task to the Node Package Manager (NPM)
  /*This allows grunt to run the task on your Command Prompt app with just the "grunt" command.no need to type the task names */

  grunt.registerTask('default', ['grunt-contrib-concat','uglify']);

}; // grunt Wrapper function