const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'entryHello' : './src/entryHello.js',
        'entryKiwi' : './src/entryKiwi.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist')
    },
    mode: process.env.NODE_ENV === 'dev' ? 'development': 'production',
    optimization:{
        splitChunks: {
            chunks: "all",
            minSize: 50000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.(woff2|woff|ttf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                  },
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello.html',
            chunks: ['entryHello'],
            title: 'Hello World',
            template: 'src/index.hbs',
            description: 'Hello World'
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            chunks: ['entryKiwi'],
            title: 'kiwi',
            template: 'src/index.hbs',
            description: 'kiwi'
        })
    ]

}