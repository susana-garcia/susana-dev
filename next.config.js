const path = require('path')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = {
  env: {
    GENERATE_RSS: PHASE_PRODUCTION_BUILD,
    BLOG_URL: PHASE_PRODUCTION_BUILD ? 'https://www.lailo.ch' : 'http://localhost:3000',
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve(__dirname, 'src'))
    return config
  },
}
