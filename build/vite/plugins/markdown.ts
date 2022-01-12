import { Plugin } from 'vite'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import Anchor from 'markdown-it-anchor'

export function createMarkdownPlugin() {
  const markdownPlugin: Plugin = Markdown({
    headEnabled: true,
    // default options passed to markdown-it
    // see: https://markdown-it.github.io/markdown-it/
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: true,
    },
    // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
    markdownItSetup(md) {
      // for example
      md.use(Anchor)
      md.use(Prism)
    },
  })

  return markdownPlugin
}
