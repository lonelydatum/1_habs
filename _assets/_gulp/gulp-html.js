var gulp            = require('gulp');
var ejs             = require("gulp-ejs");
var util            = require('gulp-util');
var notify          = require("gulp-notify");


function buildTemplates(project, browserSync){
	var splitInfo = project.split('_');
    const len = splitInfo.length
    var name = splitInfo[0];
    var size = splitInfo[len-1].split("x");
    var enfr = splitInfo[1]
    var width = size[0];
    var height = size[1];
    var obj = {name: name, width:width, height:height, size:splitInfo[len-1], enfr:enfr};

    return gulp.src("./dev/"+project+"/index.ejs")

        .pipe(ejs(obj).on('error', util.log))        
        .on('error', notify.onError({message:"<%= error.message %>", wait: false}))               
        .pipe(gulp.dest(function(file){
            return file.base;
        }))
        .pipe(browserSync.stream());
}


module.exports = buildTemplates;