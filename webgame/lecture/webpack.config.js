const path = require("path");

module.exports = {
    // module name
    name: "wordrelay-setting",

    // 베포 production, 개발 development
    mode: "development",

    // eval 개발에 이상적인 옵션 , none 베포 (production)
    devtool: "eval",

    // 확장자 인식 옵션
    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {
        rules: [
            {
                // js, jsx에 loader의 설정을 적용하겠다. ( 최신 문법)
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
        ],
    },

    // 입력
    entry: {
        app: [`./client`],
    },

    // 출력
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
    },
};
