const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/assets/svg'),  // 业务代码本地私有 svg 存放目录
];

const extraPostCSSPlugins = [
  pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }),
]

export default {
  entry: "src/index.js",
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ["import", {"libraryName": "antd-mobile", "libraryDirectory": "lib", "style": "css"}]
      ],
      extraPostCSSPlugins: extraPostCSSPlugins,
    },
    production: {
      extraBabelPlugins: [
        "transform-runtime"
      ]
    }
  },
  svgSpriteLoaderDirs: svgSpriteDirs
}
