const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "rsp-settings",
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

    plugins: [new RefreshWebpackPlugin()],

    entry: { app: ["./client.jsx"] },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/dist",
    },
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: {
            directory: path.resolve(__dirname),
        },
        hot: true,
    },
};
