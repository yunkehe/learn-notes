/*
 * buddha-heke
 * https://github.com/yunkehe/learn-notes
 *
 * Copyright (c) 2016 何珂
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha_heke', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    var config = {
      who : 'buddha',
      commentSymbol : '//'
    };

    var testExistRegexMap = {
      'buddha' : /o8888888o/
    };

    var who = config.who,
        commentSymbol = config.commentSymbol,
        commentFilePathMap = {
          'buddha' : 'assets/buddha.txt'
        },
        commentFilePath = path.join(__dirname, commentFilePathMap['buddha']),
        commentContent = grunt.file.read(commentFilePath);

      var lineCommentArr = commentContent.split(grunt.util.normalizelf('\n'));
      
      lineCommentArr.forEach(function(value, index, arr){
        arr[index] = commentSymbol + value;
      })

      commentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath),
            newFileContent = commentContent + grunt.util.normalizelf('\n') + originalFileContent;

            if(testExistRegexMap['buddha'].test(originalFileContent)){
              return;
            }

          grunt.file.write(filepath, newFileContent);
        // return grunt.file.read(filepath);
      });

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
