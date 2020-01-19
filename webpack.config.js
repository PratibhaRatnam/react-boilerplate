module.exports = (env, argv) =>({
    entry: './src/index.js',
    output: {
        path:`${__dirname}/public`,
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: [{
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-react", "@babel/preset-env"],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                      ]
                }
               
            }
            ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    devtool: argv.mode ==="development" ? 'source-map' : false
})