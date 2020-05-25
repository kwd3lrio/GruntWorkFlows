module.exprts = function(grunt){
  
  // Configure the various tasks and plugins that we'll be using

  grunt.initConfig({
    
  }); // END initConfig


  //function Loads your task to the Node Package Manager (NPM)
  
  // grunt.loadNpmTasks('');


  /* function Publishes your task to the Node Package Manager (NPM) node_module folder in your project directory. Then it can be ran in the command prompt */

  grunt.registerTask('run',function(){
      console.log('Hello, World');
  });

}; // grunt Wrapper function