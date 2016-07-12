//importamos gulp

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify')
var browserSync = require('browser-sync').create();

//tarea por defecto

gulp.task("default",function(){

    //iniciar BrowserSync
    browserSync.init({
        server: "./",
        browser:"google chrome"
    });

	gulp.watch("src/scss/*.scss",["compile-sass"]);
    //observa los cambios realizados en el HTML y recarga el navegador
    gulp.watch("*html").on("change",browserSync.reload);

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




