module.exports = {
    context: __dirname,
    entry: "./index",
    output: {
        path: __dirname + "/public/dist",
        filename: "hlsm3u8.js",
        library: "Hlsm3u8" 
    }
}
