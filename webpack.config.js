var path = require('path');

var config = {
    entry: [path.resolve(__dirname, 'app/src/layout.jsx')],
    output: {
        path: path.resolve(__dirname, 'app/build/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx$/,
            exclude: /node_modles/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        }]
    }
};

module.exports = config;
