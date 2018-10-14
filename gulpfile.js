var gulp=require("gulp");
//var sass=require("gulp-sass")

gulp.task("copyHtml",function(){
	gulp.src("*.html").pipe(gulp.dest("E:\\phpStudy\\WWW\\gitgulp"))
});
gulp.task("copyCss",function(){
	gulp.src("css/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\gitgulp\\css"))
});
gulp.task("copyJs",function(){
	gulp.src("js/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\gitgulp\\js"))
});
gulp.task("copyImg",function(){
	gulp.src("img/*.{jpg,png}").pipe(gulp.dest("E:\\phpStudy\\WWW\\gitgulp\\img"))
});
gulp.task("copyFoot",function(){
	gulp.src("foot/**/*").pipe(gulp.dest("E:\\phpStudy\\WWW\\gitgulp\\foot"))
});

//gulp.task("copySass",function(){
//	gulp.src("sass里面的文件").pipe(sass()).pipe(gulp.dest("路径"))
//});

//执行上面所有任务
gulp.task("build",["copyHtml","copyCss","copyJs","copyImg","copyFoot"],function(){
	console.log("ok");
});




gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("css/**/*",["copyCss"]);
	gulp.watch("js/**/*",["copyJs"]);
	gulp.watch("img/*.{jpg,png}",["copyImg"]);
	gulp.watch("foot/**/*",["copyFoot"]);
});
