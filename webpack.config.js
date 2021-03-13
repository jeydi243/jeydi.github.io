const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    entry: './index.js',
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, './public/assets/'),
        publicPath: path.resolve(__dirname, './public/assets/'),
        filename: 'index.js',
    },
    plugins: [new MiniCssExtractPlugin({ linkType: 'text/css' })],
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        compress: true,
        port: 9000,
        hot: true,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
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
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
}
