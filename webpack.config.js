const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist/assets/'),
        distPath: path.resolve(__dirname, './dist/assets/'),
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
        rules: [{
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [{
            //         loader: 'file-loader',
            //     }, ],
            //     options: {
            //         outputPath: 'images',
            //     },
            // },
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
                loader: 'url-loader',
                options: { outputPath: 'images' }
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