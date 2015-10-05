var webpack = require("webpack");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./build",
        publicPath: "build/",
        filename: "build.js",
	chunkFilename: "[id].build.js?v=[hash]"
    },
    module: {
        loaders: [
            {test: /\.styl$/, loader: "style!css!stylus"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.html$/, loader: "html"},
            //fonts
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
            //uglify ignore
//            {
//                test: /.*\/app\/.*\.js$/,
//                exclude: 'materialize.css',
//                loader: "uglify"
//            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery",
            "Hammer": "hammerjs"
            //jquery-hammerjs
        })
        //new webpack.optimize.UglifyJsPlugin({
        //    //say no to yellow terminal after minify
        //    compress: {
        //        warnings: false//true
        //    },
        //    //makes spaghetti from codes/variables except for core variables
        //    mangle: {
        //        except: ['$super', '$', 'jQuery', 'exports', 'require']
        //    }
        //})
    ]
}
