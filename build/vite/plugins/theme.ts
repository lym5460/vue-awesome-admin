import { Plugin } from 'vite'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'
import fs from 'fs'
import path from 'path'

export function createThemePlugin() {
  const themeDir = path.resolve(__dirname, '../../../src/theme')
  const multipleScopeVars = fs
    .readdirSync(themeDir)
    .filter((i) => i.endsWith('scss'))
    .map((i) => {
      return {
        scopeName: i.slice(0, -5),
        path: path.join(themeDir, i),
      }
    })

  const themePlugin: Plugin[] = themePreprocessorPlugin({
    scss: {
      // 是否启用任意主题色模式，这里不启用
      arbitraryMode: false,
      // 提供多组变量文件
      multipleScopeVars: multipleScopeVars,
      // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
      includeStyleWithColors: [
        {
          color: '#ffffff',
          // 此类颜色的是否跟随主题色梯度变化，默认false
          // inGradient: true,
        },
      ],
      // 默认取 multipleScopeVars[0].scopeName
      defaultScopeName: '',
      // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
      extract: true,
      // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
      outputDir: '',
      // 会选取defaultScopeName对应的主题css文件在html添加link
      themeLinkTagId: 'theme-link-tag',
      // "head"||"head-prepend" || "body" ||"body-prepend"
      themeLinkTagInjectTo: 'head',
      // 是否对抽取的css文件内对应scopeName的权重类名移除
      removeCssScopeName: false,
      // 可以自定义css文件名称的函数
      customThemeCssFileName: (scopeName) => scopeName,
    },
  })
  return themePlugin
}
