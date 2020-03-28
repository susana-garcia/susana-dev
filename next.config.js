const path = require('path')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = {
  env: {
    GENERATE_RSS: PHASE_PRODUCTION_BUILD,
    SITE_URL: PHASE_PRODUCTION_BUILD ? 'https://www.lailo.ch' : 'http://localhost:3000',
    PROFILE_IMAGE: 'https://www.gravatar.com/avatar/a2d6b99998cc640643196c2ebc7e94b6?s=256',
    SITE_NAME: 'Lailo',
    SITE_TITLE: "Lailo's Blog",
    SITE_DESCRIPTION: 'Passionate about simplicity in code and design.',
    SITE_LOCALE: 'en',
    TWITTER_USERNAME: 'lailo_ch',
    GITHUB_USERNAME: 'lailo',
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve(__dirname, 'src'))
    return config
  },
}
