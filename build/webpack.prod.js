const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    library: 'rc-ui',
    libraryTarget: 'umd', // 采用通用模块定义，兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
};

module.exports = merge(baseConfig, prodConfig);
