const { src, dest, series } = require('gulp');
const purgecss = require('gulp-purgecss')
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const del = require('del');
const cp = require("child_process");
const revAll = require("gulp-rev-all");

const clean = () => {
  return del(['dist']);
}

const copyAssets = () => {
    return src('src/assets/{images,js,fonts}/**')
        .pipe(dest('dist/assets'));
}

// Base files (robots.txt, htaccess, etc...)
const copyBaseFiles = () => {
    return src('src/base/**/*', { dot: true } )
        .pipe(dest('dist'));
}

const build = () => {
  return cp.spawn("npx", ["@11ty/eleventy"], { stdio: "inherit" });
}

const minifyHTML = () => {
  const options = {
    removeAttributeQuotes: true,
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    useShortDoctype: true
  }

  return src('dist/**/*.html')
   .pipe(htmlmin(options))
   .pipe(dest('dist'));
}

const purgeCSS = () => {
  return src('src/assets/css/*.css')
  .pipe(purgecss({
    content: ['dist/**/*.html']
  }))
  .pipe(concat('all.min.css'))
  .pipe(dest('dist/assets/css'));
}

const minifyCSS = () => {
  return src('dist/assets/css/all.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/assets/css'));
}

const revision = () => {
	return src('dist/**')
    .pipe(revAll.revision({ dontRenameFile: [/^\/logo-32x32.png$/g, ".html", ".json", ".txt"] }))
    .pipe(dest("dist"))
    .pipe(revAll.manifestFile())
    .pipe(dest("dist"))
    .pipe(revAll.versionFile())
    .pipe(dest("dist"));
}

exports.build = build;
exports.default = series(clean, copyAssets, copyBaseFiles, build, minifyHTML, purgeCSS, minifyCSS, revision);
