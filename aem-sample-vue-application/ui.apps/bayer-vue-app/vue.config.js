const CopyPlugin =  require("./CopyPlugin")
module.exports = {
    devServer: {
        proxy: 'http://localhost:4502/',
    },
    configureWebpack: {
      output: {
        filename: '[name].js'
      },
      plugins: [
        new CopyPlugin({dist: "../src/main/content/jcr_root/apps/vue-app/clientlibs/main"})
      ]
    },
    chainWebpack: config => {
        // dont do code splitting
        config.optimization.delete('splitChunks')
        if(config.plugins.has('extract-css')) {
          const extractCSSPlugin = config.plugin('extract-css')
          extractCSSPlugin && extractCSSPlugin.tap(() => [{
            filename: '[name].css',
            chunkFilename: '[name].css'
          }])
        }
      }

}
