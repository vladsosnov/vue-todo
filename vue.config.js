const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  publicPath: '/vue-todo/',
  configureWebpack: (config) => {
    if (config.optimization && Array.isArray(config.optimization.minimizer)) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        (plugin) => !(plugin instanceof CssMinimizerPlugin)
      )
    }
  }
}
