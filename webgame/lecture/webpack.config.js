const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/* entry, module, plugin, output , other.. 순서로 */
// entry 파일에 module을 적용하고, 기타기능(plugin)적용하고, output한다.
// hot reloading 기능은 watch모드랑 달리 test상태 그대로 reload되어 데이터가 안날라감

module.exports = {
    name: "Wordrelay-settings",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".jsx", ".js"],
    },

    entry: {
        app: ["./client"],
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    // preset은 플러그인 집합으로 원하는 환경설정 가능
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                // 무슨 브라우저를 지원할까?
                                targets: {
                                    // 한국 점유율 5프로 이상 브라우저만 지원해라
                                    browsers: ["> 1% in KR"],
                                },
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    // 플러그인 확장프로그램
                    plugins: ["react-refresh/babel"],
                },
            },
        ],
    },

    plugins: [new RefreshWebpackPlugin()],

    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: "/dist",
    },
    devServer: {
        devMiddleware: { publicPath: "/dist" },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};
