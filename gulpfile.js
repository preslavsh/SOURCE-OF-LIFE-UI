var gulp = require('gulp');
var tslint = require("gulp-tslint");


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task("codelyzer", () =>
    gulp.src(["src/typescripts/*.ts"])
        .pipe(tslint({
				"rulesDirectory": "node_modules/codelyzer/",
				"configuration": "codelyzer-config.json"
				}))
        .pipe(tslint.report("prose"))
);


