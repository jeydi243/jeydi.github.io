const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    // devtool: 'source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, './public/'),
        publicPath: '',
        filename: 'index.js',
    },
    stats: {
        errorDetails: false,

    },
    node: { global: true },
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
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                type: 'asset',
                options: {
                    name: '[name].[ext]',
                    outputPath: (url, resourcePath, context) => {
                        const relativePath = path.relative(
                            context,
                            resourcePath
                        )
                        if (relativePath.includes('epa')) {
                            return `img/epa/${url}`
                        }
                        return `img/${url}`
                    },
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                    },
                },

            },

            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     loader: 'url-loader',
            //     options: { outputPath: 'img' },
            // },
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            linkType: 'text/css',
        }),
        new NodePolyfillPlugin(),
        // new ImageMinimizerPlugin({
        //     minimizerOptions: {
        //         // Lossless optimization with custom option
        //         // Feel free to experiment with options for better result for you
        //         plugins: [
        //             ['gifsicle', { interlaced: true }],
        //             ['jpegtran', { progressive: true }],
        //             ['optipng', { optimizationLevel: 5 }],
        //             [
        //                 'svgo',
        //                 {
        //                     plugins: [{
        //                         removeViewBox: false,
        //                     }, ],
        //                 },
        //             ],
        //         ],
        //     },
        // }),
    ],
}