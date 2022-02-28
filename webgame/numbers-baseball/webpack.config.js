const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "Number-baseball",
    mode: "development",
    devtool: "inline-source-map",
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
                        presets: [
                            ["@babel/preset-env", { debug: true }],
                            "@babel/preset-react",
                        ],
                        plugins: ["react-refresh/babel"],
                    },
                },
            },
        ],
    },

    plugins: [new RefreshWebpackPlugin()],

    entry: {
        app: ["./client.jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};
