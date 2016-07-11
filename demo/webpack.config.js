var webpack = require('webpack');

/* RELEASE | DEV */
var RELEASE = (process.env.npm_lifecycle_event === 'release');
var plugins = RELEASE ? 
                [new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })] : 
                [];
var outputfilename = RELEASE ?  "hlsm3u8.min.js" : "hlsm3u8.js";

module.exports = {
    context: __dirname,
    entry: "./index",
    output: {
        path: __dirname + "/public/dist",
        filename: outputfilename,
        library: "Hlsm3u8" 
    },
    plugins: plugins
}
