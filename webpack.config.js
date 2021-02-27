const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const optimization = (isProduction) => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProduction) {
        config.minimizer = [
            new OptimizeCSSAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === "development"
    const isProduction = !isDevelopment;
    return {
    mode: argv.mode,
    entry: {
        main: ['@babel/polyfill', './src/index.tsx']
    },
    output: {
        "filename": "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(isProduction),
    devServer: {
        port: 3000,
        hot: isDevelopment
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    plugins: [
        new HTMLWebPackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                    }
                ]
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                  },
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                  },
                }
            },
        ]
    }
}
}