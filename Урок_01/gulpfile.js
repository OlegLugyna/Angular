// Various helper modules
var gulp = require('gulp');
var webserver = require('gulp-webserver');

//tasks
gulp.task ('webserver', function() {
  return gulp.src('.')                 //root
    .pipe(webserver({
      livereload: true,               //livereload
      directoryListing: true,
      open: 'http://localhost:8000/index.html' 
    }));
});

gulp.task ('default', ['webserver']);

