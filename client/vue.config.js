module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': `${__dirname}/src`
            }
        },
        entry: {
            app: './src/main.js'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true
            }
        }
    }
};