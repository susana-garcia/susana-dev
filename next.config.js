const path = require('path')
const withPlugins = require('next-compose-plugins')
const withReactSvg = require('next-react-svg')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const nextConfig = {
  env: {
    GENERATE_RSS: PHASE_PRODUCTION_BUILD,
    AUTHORS_NAME: 'Susana',
    SITE_URL: PHASE_PRODUCTION_BUILD ? 'https://susana.dev' : 'http://localhost:3000',
    PROFILE_IMAGE: 'https://gravatar.com/avatar/c52150b29ff2a60612bc0993de6b1732?s=256',
    SITE_NAME: 'Susana',
    SITE_TITLE: "Susana's Blog",
    SITE_DESCRIPTION: 'Passionate about simplicity in code and design.',
    SITE_ABOUT:
      "I'm Susana, a Senior Software Engineer and this is the place where I share content related to backend development using different languages, machine learning and more.",
    SITE_LOCALE: 'en',
    TWITTER_USERNAME: 'susu__garcia',
    GITHUB_USERNAME: 'susana-garcia',
    TINY_LETTER_ID: 'susana-garcia',
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve(__dirname, 'src'))
    return config
  },
}

module.exports = withPlugins(
  [
    [
      withReactSvg,
      {
        include: path.resolve(__dirname, 'src/assets/svg'),
      },
    ],
  ],
  nextConfig
)
