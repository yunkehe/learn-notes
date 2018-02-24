module.exports = {
    devtool: 'eval-source-map', // source-map配置 选项
    entry: __dirname + '/app/main.js', //入口文件
    output: {
        path: __dirname + '/public', //打包后的文件
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public', //本地服务器加载页面路径
        historyApiFallback: true,
        inline: true
    },
    // module: {
    //     rules: [
    //         {
    //             test: /(\.jsx|\.js)$/,
    //             use:{
    //                 loader: "babel-loader",
    //             },
    //             exclude: "/node_modules/"
    //         }
    //     ]
    // }
}