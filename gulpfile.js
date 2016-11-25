var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var fileExists = require('file-exists');
var bower = require('./bower');

var urlbowerPath = bower.root.bowerPath,
    srcPath = bower.root.srcPath,
    urlAssets = bower.root.urlAssets,
    urlViews = bower.root.urlViews;

var $dev = false;


// -----------------------BOWER URLS--------------------------
function bowerPath(urls){
    for (i = 0; i < urls.length; i++) {
      urls[i] = urlbowerPath+"/"+urls[i];
    }
    return urls;
}
var sassPath = bowerPath([
        'font-awesome/',
        'animate-sass/',
        'bootstrap-sass/assets/stylesheets/'
    ]);

var iconsFiles = bowerPath([
        'font-awesome/fonts/**.',
        'bootstrap-sass/assets/fonts/*/**.*'
    ]);


// -----------------------CSS ASSETS---------------------------
gulp.task('sass', function() {
    function scssGulp(src,rename,dist,maxsize){
        gulp.src(src)
            .pipe(plugins.fileInclude({ basepath: '@file', context: {develop: $dev} })).on('error', console.log)
            .pipe(plugins.sass({includePaths: sassPath}).on('error', plugins.sass.logError))
            .pipe(plugins.if(!$dev,plugins.autoprefixer({browsers: ['last 20 versions', 'ie >= 9']})))
            .pipe(plugins.if(!$dev,plugins.cleanCss({compatibility: 'ie8'})))
            .pipe(plugins.if(!$dev,plugins.base64({baseDir: urlAssets+'/img',extensions: ['svg','png','jpg','gif'],maxImageSize: maxsize*1024,debug: false})))
            .pipe(plugins.rename(rename))
            .pipe(plugins.makeCssUrlVersion({assetsDir: __dirname+'/'+urlAssets+'/css'}))
            .pipe(gulp.dest(dist));
    }
    scssGulp(srcPath+'/scss/ldf.scss','ldf.min.css',urlAssets+'/css',40);
    scssGulp(srcPath+'/scss/app.scss','website.min.css',urlAssets+'/css',40);
    if ($dev){scssGulp(srcPath+'/scss/vendors/app.scss','vendors.min.css',urlAssets+'/css',40);}

    gulp.src(srcPath+'/style.css') 
        .pipe(gulp.dest(urlAssets)); 
});


// -----------------------JS ASSETS---------------------------
gulp.task('scripts', function() { 
    function jsGulp(src,rename,dist){
        gulp.src(src) 
            .pipe(plugins.fileInclude({ basepath: '@file', context: {develop: $dev} })).on('error', console.log)
            .pipe(plugins.if(!$dev,plugins.uglify({ mangle:false, compress:false, beautify:true })))
            .pipe(plugins.rename(rename))
            .pipe(gulp.dest(dist)); 
    }
    jsGulp(srcPath+'/scripts/app.js','website.min.js',urlAssets+'/js');
    if ($dev){jsGulp(srcPath+'/scripts/vendors/app.js','vendors.min.js',urlAssets+'/js');}
});

// -----------------------HTML MINIFY---------------------------
gulp.task('html', function() {
    return gulp.src([srcPath+'/**.{phtml,html,php}', srcPath+'/**/**/**.{phtml,html,php}'])
        .pipe(plugins.fileInclude({ basepath: '@file', context: {develop: $dev} })).on('error', console.log)
        .pipe(plugins.if(!$dev,plugins.htmlmin({collapseWhitespace: true, removeComments: true, minifyJS: true, minifyCSS: true})))
        .pipe(plugins.versionAppend(['html','js','css','gif','svg'], {appendType: 'guid'}))
        .pipe(gulp.dest(urlViews));
});

// -----------------------IMG OPTIMIZE---------------------------
gulp.task('images', function() {
    gulp.src([srcPath+'/img/**/**.{jpg,jpeg,png,PNG,gif}','!'+srcPath+'/src'])
        .pipe(plugins.changed(urlAssets+'/img')) // Ignore unchanged files
        .pipe(plugins.imagemin()) // Optimize
        .pipe(gulp.dest(urlAssets+'/img'));

    gulp.src(srcPath+'/screenshot.jpg')
        .pipe(gulp.dest(urlAssets)); 
});

// -----------------------FONTS ASSETS---------------------------
gulp.task('icons', function() { 
    gulp.src(srcPath+'/fonts/**/**.{eot,svg,ttf,woff}') 
        .pipe(gulp.dest(urlAssets+'/fonts')); 
    gulp.src(iconsFiles) 
        .pipe(gulp.dest(urlAssets+'/fonts')); 
});

// -----------------------WORDPRESS DOWNLOAD---------------------------
gulp.task('wordpress', function() {
    if(!fileExists('wordpress/index.php')) {
        plugins.download(bower.root.urlWP)
            .pipe(plugins.gunzip())
            .pipe(plugins.untar())
            .pipe(gulp.dest('.'));
    }
});


// -------------------------WATCHERS----------------------------
gulp.task('default', ['wordpress','sass','icons','scripts','html','images'], function() {
    gulp.watch([srcPath+'/scss/**/**.scss'], ['sass','html']);
    gulp.watch([srcPath+'/scripts/**/**.js'], ['scripts','html']);
    gulp.watch([srcPath+'/**/**.{phtml,html,php}', srcPath+'/phtml/**/**.{phtml,html,php}'], ['html']);
    gulp.watch([srcPath+'/img/**/**.**'], ['images','sass']);
    gulp.watch([srcPath+'/fonts/**/**.**'], ['icons']);
});



