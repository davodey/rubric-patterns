// Load plugins
var gulp = require('gulp'),
    prettify = require('gulp-html-prettify'),
    headerfooter = require('gulp-header-footer');
    inject = require('gulp-inject'),
    strip = require('gulp-strip-comments');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('bundle', ['copy-json', 'inject', 'template', 'strip', 'pretty']);

// copys the pl config file over to the node directory
gulp.task('copy-json', function() {
    gulp.src("./patternlab-config.json")
        .pipe(gulp.dest('node_modules/edition-node-gulp/'));
});

// injects the necessary comments to render the templates
gulp.task('inject', ['copy-json', 'default'], function() {
    var stream =  gulp.src('./dist/*.html')
        .pipe(headerfooter({
            header:'<!-- inject:head:html --><!-- endinject -->',
            footer:'<!-- inject:foot:html --><!-- endinject -->',
            filter: function(file){
                return true
            }
        }))
        .pipe(gulp.dest('./dist/inject'))
    return stream;
});


// adds the header and footer to the html
gulp.task('template', ['inject'], function () {
    var stream =  gulp.src('./dist/inject/*.html')
        .pipe(inject(gulp.src(['./meta/_header.html']), {
            starttag: '<!-- inject:head:{{ext}} -->',
            transform: function (filePath, file) {
                // return file contents as string
                return file.contents.toString('utf8')
            }
        }))
        .pipe(inject(gulp.src(['./meta/_footer.html']), {
            starttag: '<!-- inject:foot:{{ext}} -->',
            transform: function (filePath, file) {
                // return file contents as string
                return file.contents.toString('utf8')
            }
        }))
        .pipe(gulp.dest('./dist/built/'));
    return stream;
});

// strips out any comments that are not needed
gulp.task('strip', ['template'], function() {
    return gulp.src('./dist/built/*.html')
        .pipe(strip())
        .pipe(gulp.dest('./dist/striped/'));
});


//  reformats the html
gulp.task('pretty', ['strip'], function() {
    return gulp.src('./dist/striped/*.html')
        .pipe(prettify({indent_char: ' ', indent_size: 4}))
        .pipe(gulp.dest('./ui/'));
});

