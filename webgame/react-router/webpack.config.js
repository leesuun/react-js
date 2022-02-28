const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "games-setting",
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.join(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env"], "@babel/preset-react"],
                        plugins: ["react-refresh/babel"],
                    },
                },
            },
        ],
    },

    entry: {
        app: "./client.jsx",
    },

    plugins: [new RefreshWebpackPlugin()],

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist",
        filename: "[name].js",
    },
    devServer: {
        historyApiFallback: true,
        devMiddleware: { publicPath: "/dist" },
        static: {
            directory: path.resolve(__dirname),
        },
        hot: true,
    },
};
