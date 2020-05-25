module.exports = function(grunt){
  
  // Configure the various tasks and plugins that we'll be using

  grunt.initConfig({
    concat : {
      js: {
        src : ['js/*.js'],
        dest : 'build/scripts.js' 
      },
      css : {
        src : ['css/*.css'],
        dest : 'build/styles.css' 
      }  
    } //END Concat plugin task
  }); // END initConfig


  //function Loads plugins
  
  grunt.loadNpmTasks('grunt-contrib-concat');


  /* function Publishes your task to the Node Package Manager (NPM) node_module folder in your project directory. Then it can be ran in the command prompt */

  //run concat tasks individually in command line
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
  
  // Test register task
  /* grunt.registerTask('run', function(){
      console.log('Hello, World.');
  }); */

}; // grunt Wrapper function