const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScripts = require('webpack-remove-empty-scripts');
const path = require("path");

module.exports = env =>
{
    env = env || {};
    return {
        name: "styles",
        mode: env.production ? "production" : "development",
        entry: {
            main: "./resources/css/main.scss",
        },
        module: {
            rules: [
                {
                    test: /.\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: !env.production
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: !env.production,
                                postcssOptions: {
                                    plugins: [
                                        require("autoprefixer")()
                                    ]
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: !env.production,
                                sassOptions:{
                                    outputStyle: env.production ? "compressed" : "nested"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new RemoveEmptyScripts(),
            new MiniCssExtractPlugin({
                filename: "../../css/[name]" + (env.production ? ".min" : "") + ".css",
            })
        ],
        output: {
            path: path.resolve(__dirname, "../../resources/js/dist")
        }
    };
};
