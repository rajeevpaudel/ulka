const path = require('path')
const fs = require('fs')

let ulkaConfigs = {}

try {
  const configExists = fs.existsSync(path.join(process.cwd(), 'ulka-config.js'))
  if (configExists) {
    ulkaConfigs = require(path.join(process.cwd(), 'ulka-config.js'))
  }
} catch (e) {
  console.log(`>> ${e.message}`.red)
  throw e
}

const defaultConfigs = {
  siteMetaData: {
    title: 'Ulka.Js',
    desription: 'UlkaJs - static site generator'
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  plugins: [],
  contents: {
    path: 'contents',
    generatePath: 'blog',
    template: 'blog.ulka',
    // Array of functions that takes markdown as arg and returns markdown
    preParse: [],
    // Array of functions that takes html as arg and return html
    postParse: [],
    // Array of functions that takes frontmatter as arg and return frontMatter
    parseFrontMatter: []
  }
}

module.exports = {
  ...defaultConfigs,
  ...ulkaConfigs
}
