/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */
const pxtorem = require("postcss-pxtorem")

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path')

const {NODE_ENV, VUE_APP_CURRENTMODE} = process.env;
const IS_PRODUCTION = NODE_ENV === 'production' && VUE_APP_CURRENTMODE === 'production'

function resolve(dir) {
    return path.join(__dirname, dir)
}

const devProxy = {
    '/api/': {
        target: 'http://8.140.125.175:3008/',
        changeOrigin: true
    },
}

module.exports = {
    outputDir: 'dist',
    assetsDir: 'marmot',
    productionSourceMap: IS_PRODUCTION,
    runtimeCompiler: true,
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback: true,
        proxy: devProxy,
    },

    css: {
        loaderOptions: {
            scss: {
                implementation: require('sass'), // This line must in sass option
                // 预处理器 loader import 样式
                // prependData: '@import "~@/assets/style/variables.scss";'
            },
            postcss: {
                postcssOptions: {
                    plugins: [
                        require("postcss-pxtorem")({
                            // 把px单位换算成rem单位
                            rootValue: 37.5, // 换算的基数(设计图750的根字体为75)
                            // selectorBlackList: ['weui', 'mu'], // 疏忽转换正则匹配项
                            propList: ["*"],
                        }),
                    ]
                }
            }
        },
        extract: false,
    },
    configureWebpack: {
        resolve: {
            alias: {
                $vue: 'vue/dist/vue.js',
            },
        },
        plugins: [
            new CleanWebpackPlugin(),

        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    custom: {
                        minSize: 10000,
                        test: /[\\/]src[\\/]/,
                        name: 'chunk-common-duplicate',
                        minChunks: 20,
                        priority: -10,
                        chunks: 'all',
                        reuseExistingChunk: true
                    }
                }
            }
        },
    },
    chainWebpack: (config) => {
        /*      config.module.rule('images').use('url-loader').loader('url-loader').tap(options => ({
                  limit: 0,
                  fallback: {
                      loader: 'file-loader',
                      options: {
                          name: 'marmot/images/[name].[ext]?[hash:8]'
                      }
                  }
              }));*/
        const imgOfsMap = config.module.rule('images').oneOfs.store
        imgOfsMap.forEach(item => {
            item
                .use('url-loader')
                .loader('url-loader')
                .options({
                    limit: 0,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'marmot/images/[name].[ext]?[hash:8]'
                        }
                    }
                })
                .end()
        })


        config.module.rule('svg').use('file-loader').loader('file-loader').tap(options => ({
            name: 'marmot/images/[name].[hash:8].[ext]'
        }));

        // 定义全局scss变量
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 公用scss
                    resources: './src/assets/scss/index.scss'
                })
                .end()
        })

        /*      config.module
                  .rule('scss')
                  .oneOf('vue')
                  .before('postcss-loader') // this makes it work.
                  .options({
                      ident: 'postcss', //当引入外部的依赖包作为组件配置项时需要定义一个唯一的标识符，推荐这样写
                      plugins: [
                          pxtorem({
                              rootValue: 16, //表示根元素html的fontSize值,也可以是100,获取任意其他值
                              propList: ['*'], //设置px转换成rem的属性值，*表示所有属性的px转换为rem
                          }),
                      ]
                  }).end()*/

        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
    },
    transpileDependencies: [
        'swiper',
        'dom7',
        'ssr-window'
    ]
};
