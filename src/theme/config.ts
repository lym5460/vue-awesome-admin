/**
 * 主题色配置
 */

export interface ThemeMap {
  // themeScope : themeColor
  [x: string]: string
}

// light和dark有自己的主题配置，所有可以不写
export const themeConfig: ThemeMap = {
  purple: '#8f288f',
  orange: '#f07040',
}
