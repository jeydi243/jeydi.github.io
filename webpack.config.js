const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve('./public/assets/'),
        publicPath: './assets/',
        filename: 'bundle.js',
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        contentBase: path.resolve('./public'),
        compress: true,
        port: 9000,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                    },
                },
            },
        ],
    },
}
