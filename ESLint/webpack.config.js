const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'entryHello' : './src/entryHello.js'
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
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader , 'css-loader' ,'sass-loader'
                ]
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
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello.html',
            chunks: ['entryHello'],
            title: 'Hello World',
            template: 'src/index.hbs',
            description: 'Hello World'
        })
    ]

}