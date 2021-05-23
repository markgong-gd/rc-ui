const path = require('path');

module.exports = {
    entry: './components/index.ts',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.less$/,
            use: [{
            loader: 'style-loader',
            },
            {
            loader: 'css-loader',
            },
            {
            loader: 'less-loader',
            },
            ],
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../lib'),
        library: 'rc-ui',
        library: 'umd'
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    devtool: "inline-source-map",
};
