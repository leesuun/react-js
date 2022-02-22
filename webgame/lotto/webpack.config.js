const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "lotto-settings",
    devtool: "eval",
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["react-refresh/babel"],
                    },
                },
            },
        ],
    },

    plugins: [new RefreshWebpackPlugin()],

    entry: {
        app: "./client.jsx",
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].js",
        publicPath: "/dist",
    },

    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};
