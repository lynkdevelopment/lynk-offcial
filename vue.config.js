const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//
const isProd = process.env.NODE_ENV === 'production'

// const productionGzipExtensions = ['js', 'css']；

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'moment': 'moment',
  // 'echarts': 'echarts',
  'element-ui': 'ELEMENT',
  // 'vue-antd-ui': 'antd'
}

// const cdn = {
//   css: [
//     'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
//   ],
//   js: [
//     'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
//     'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
//     'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
//     'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
//     'https://unpkg.com/element-ui/lib/index.js'
//   ]
// }



// vue.config.js
module.exports = {
  // 
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 
  // esLint
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 
  devServer: {
    open: true,
    port: 8886,
    proxy: { // 
      '/api': {
        target: `http://192.168.8.253:8080`,
        ws: false,
        changeOrigin: true
      },
    }
  },
  css: { // 
    extract: false, //  CSS  CSS 
    requireModuleExtension: true, //  .module
    sourceMap: false,
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        prependData: `@import "~@/assets/css/color.scss";`
      }
    }
  },
  //  (js、css、img、fonts)  ( outputDir ) 
  assetsDir: 'static',
  chainWebpack: config => {
    //  prefetch 
    config.plugins.delete('prefetch')
    // config.plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);

  },
  // 
  outputDir: 'dist',
  //  source map？
  productionSourceMap: process.env.NODE_ENV !== 'production',




  configureWebpack: config => {
    // 
    config.externals = externals;
    if(isProd){
      // 
      config.plugins.push(new UglifyJsPlugin({
        uglifyOptions:{
          ie8: false,
          parallel: true,
          warnings: false,
          sourceMap: false,

          output: {
            comments: false,
            beautify: false,
          },
          compress: {
            drop_debugger: true,
            drop_console: true,  //
            // pure_funcs: ['console.log']
          },
        }
      }))
    }

  },



  // 
  pluginOptions: {
    // ...
  },
}
