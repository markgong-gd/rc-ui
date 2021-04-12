const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const constant = require('./constant/index');

module.exports = {
    mode: 'none',
    entry: './src/index.ts',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        // happyPackMode: true,
                        configFile: `${constant.tsConfig}`
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'assets'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets', // 打包后资源存放的目录
                },
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@components': path.resolve(__dirname, `${constant.rootPath}/components/`)
        }
    }
}