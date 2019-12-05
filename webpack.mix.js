let mix = require("laravel-mix");
require("laravel-mix-purgecss");
let path = require("path");
//let purgeCssPlugin = require("purgecss-webpack-plugin");
//let extractTextPlugin = require("extract-text-webpack-plugin");
let glob = require("glob");
const PATHS = {
  src: path.join(__dirname)
};

// mix.webpackConfig({
//   plugins: [
//     new extractTextPlugin("[name].css?[hash]"),
//     new purgeCssPlugin({
//
//     })
//   ]
// });
mix.purgeCss({
  paths: glob.sync(`${PATHS.src}/*.html`)
});
mix
  .js("src/js/app.js", "dist/js")
  //.postCss("src/css/main.css", "dist/css", [require("tailwindcss")()])
  .postCss("src/css/main.css", "dist/css", [require("tailwindcss")()])
  .browserSync({
    proxy: "mywebsite.test",
    files: ["dist/js/*.js", "dist/css/*.css", "index.html"]
  });
