const webpack = require('webpack')

module.exports = {
    entry: './ex.3/index.js', 
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    }, 
    devServer:{
        port: 8082, 
        contentBase: './public'
    }, 
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query:{
                    presets: ['es2015'], 
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
}