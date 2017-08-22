var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        build:'./src/index.js',
        vendor: ['react','react-dom']
        //["babel-polyfill", './src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        // filename: '[hash].[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader',
                // loader:
                //     ExtractTextPlugin.extract(
                //     { fallback: 'style-loader', use: 'css-loader?importLoaders=1!postcss-loader!sass-loader'}
                // )
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: 'cheap-module-source-map',
    // devtool: 'source-map',
    externals: {
        swiper: 'Swiper',
        //'video.js': 'videojs'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'], // 指定公共 bundle 的名字。
            // minChunks: function (module) {
            //     // 该配置假定你引入的 vendor 存在于 node_modules 目录中
            //     return module.context && module.context.indexOf('node_modules') !== -1;
            // }
        }),
        new ExtractTextPlugin('styles.css'),
        // new UglifyJSPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJSPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}