//importamos gulp

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify')
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var browserify = require("browserify");
var tap = require("gulp-tap");
var buffer = require("gulp-buffer");


//variables de patrones de archivos
var jsFiles = ["src/js/*.js","src/js/**/*.js"];
//tarea por defecto
gulp.task("default",["concat-js","compile-sass"],function(){

    //iniciar BrowserSync
    browserSync.init({
        server: "./",
        browser:"google chrome"
    });

	gulp.watch("src/scss/*.scss",["compile-sass"]);
    //observa los cambios realizados en el HTML y recarga el navegador
    gulp.watch("*html").on("change",browserSync.reload);

    gulp.watch(jsFiles,["concat-js"]);

});


//Tarea para compilar el SASS en CSS.

gulp.task("compile-sass",function(){
	gulp.src("./src/scss/style.scss") // cargamos el archivo

	.pipe(sass().on('error', sass.logError))//compilamos el archivo

	.pipe(
		gulp.dest("./dist/css/") //guardamos en archovo en su carpeta de destino
	)
	.pipe(notify({
		title: "SASS",
		message: "Compilado"
	})).pipe(browserSync.stream());
});


// definimos la tarea para concatenar JS
gulp.task("concat-js", function(){
    gulp.src(jsFiles)
        .pipe(concat("app.js"))
        .pipe(gulp.dest("dist/js/"))
        .pipe(notify({
            title: "JS",
            message: "Concatenate!!"
        }))
        .pipe(browserSync.stream());
});

