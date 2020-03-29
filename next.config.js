const path = require('path')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = {
  env: {
    GENERATE_RSS: PHASE_PRODUCTION_BUILD,
    SITE_URL: PHASE_PRODUCTION_BUILD ? 'https://www.lailo.ch' : 'http://localhost:3000',
    PROFILE_IMAGE: 'https://www.gravatar.com/avatar/a2d6b99998cc640643196c2ebc7e94b6?s=256',
    AUTHORS_NAME: 'Lailo',
    SITE_NAME: 'Lailo',
    SITE_TITLE: "Lailo's Blog",
    SITE_DESCRIPTION: 'Passionate about simplicity in code and design.',
    SITE_ABOUT:
      "I'm Lailo, a Software Engineer from Switzerland. This is my little place to share my thoughts and experiences about web and mobile development and design.",
    SITE_LOCALE: 'en',
    TWITTER_USERNAME: 'lailo_ch',
    GITHUB_USERNAME: 'lailo',
    TINY_LETTER_ID: 'laiblog',
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve(__dirname, 'src'))
    return config
  },
}
