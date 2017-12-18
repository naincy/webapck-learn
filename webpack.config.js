module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}, //load any file with css //load any file with css
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets:['es2015']}}
        ]
    }
}