const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    console.log(env);
    return {
        mode: `${env.mode}`,
        context: resolve('src'),
        entry: './bootstrap.js',
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: '../index.html',
                mode: `${env.mode}`
            })
        ]
    }
};