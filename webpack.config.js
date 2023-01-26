const path = require('path')

module.exports = {
    entry: [path.resolve(__dirname, './src/main.js')],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        port: 3000
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}