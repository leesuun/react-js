const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "responseCheck-setting",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
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

    entry: {
        app: ["./client.jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: {
            directory: path.resolve(__dirname),
        },
        hot: true,
    },
};
