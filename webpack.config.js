const path=require('path');
module.exports={
    mode: "development",
    entry:'./index.js',
    module:{
        rules:[
            //babel
            {
                test:/\.js$/,
                //exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:
                            ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'index.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './use'),
    }
};