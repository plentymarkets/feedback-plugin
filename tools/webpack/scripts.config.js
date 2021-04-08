const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WebpackRequireFrom = require("webpack-require-from");

module.exports = env =>
{
    env = env || {};
    return {
        name: "scripts",
        mode: env.production ? "production" : "development",
        entry: "./resources/js/src/base.js",
        output: {
            filename: "feedback" + (env.production ? ".min" : "") + ".js",
            chunkFilename: "chunks/feedback-[contenthash]"+ (env.production ? ".min" : "") + ".js",
            path: path.resolve(__dirname, "..", "..", "resources/js/dist/")
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
                context: path.resolve(__dirname, "..", "..", "resources/js/src/")
            }),
            new WebpackRequireFrom({
                replaceSrcMethodName: "__loadPluginChunk"
            })
        ]
    };
};
