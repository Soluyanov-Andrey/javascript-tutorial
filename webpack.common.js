const path = require('path');
//для обращения к внутренним данным webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('babel-polyfill');

module.exports = {

    // точка входа
    entry: {
        app: ['babel-polyfill', './src/index.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    //эта штука писалась для того что были проблемы у кого то в инете и он их решил так
    //проблемы были с тем что файлы ./../ing.png клипровались в папку dist а img/img/ing.png
    //если указывались полным путем нет
    //вообще файлы копируються только те которые в потоку js css почемуто те что в шаблоне
    //не копировались
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/img/'),
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },

            {
                //
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `./postcss.config.js` } }
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true}

                    }
                ],
            },
            //этот код  писался для того чтоб загружались рисунки в dist из потока
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            },

        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'

        }),
        // с этим модулем были проблемы установился v 2.0.2 и выдовал ошибку
        // сменил на ^1.0.0
        new CleanWebpackPlugin([
            './dist/*.*'
        ]),
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'img' }

            ],
        })

        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // }),

    ]
}