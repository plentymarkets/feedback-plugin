const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");

module.exports = env =>
{
    env = env || {};
    return {
        name: "scripts",
        mode: env.production ? "production" : "development",
        entry: "./resources/js/src/entry-server.js",
        target: "node",
        output: {
            filename: "feedback-server" + (env.production ? ".min" : "") + ".js",
            path: path.resolve(__dirname, "..", "..", "resources/js/dist/"),
            libraryTarget: "commonjs2"
        },
        resolve: {
            alias: {
                vue: "vue/dist/vue" + (env.prod ? ".min" : "") + ".js"
            }
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin({
                exposeFilename: true
            }),
            new ESLintPlugin({
                extensions: ['js', 'vue'],
                context: path.resolve(__dirname, "..", "..", "resources/js/src/"),
                fix: true
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ],
        optimization: {
            chunkIds: "natural",
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        }
    };
};
