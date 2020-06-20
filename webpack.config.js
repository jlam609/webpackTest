const path = require('path')

module.exports = {
    entry : path.join(__dirname, '/src/app.js'),
    mode: "development",
    module: {
        rules:[{
            exclude:/node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}