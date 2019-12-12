const Path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: Path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            chunks: ['index'],
            inject: true,
            title: 'index',
            minify: {
                html5: true,
                collapseWhitespace: true
            }
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        overlay: true,
        contentBase: './dist',
        hot: true
    },
    mode: 'none'
}