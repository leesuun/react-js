const path = require("path");
const webpack = require("webpack");

/* entry, module, plugin, output , other.. 순서로 */
// entry 파일에 module을 적용하고, 기타기능(plugin)적용하고, output한다.

module.exports = {
    name: "gugudan-settings",
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
                    plugins: [],
                },
            },
        ],
    },

    plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

    output: {
        path: path.join(__dirname, "./dist"),
        filename: "app.js",
    },
};
