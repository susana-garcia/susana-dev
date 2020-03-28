import React from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { IconContext } from 'react-icons'
import { NextSeo } from 'next-seo'

import 'styles/tailwind.css'
import 'styles/main.css'
import 'styles/markdown.css'
import 'styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <NextSeo
      title={process.env.SITE_TITLE}
      titleTemplate={`${process.env.SITE_TITLE} | %s`}
      description={process.env.SITE_DESCRIPTION}
      canonical={process.env.SITE_URL}
      twitter={{
        handle: `@${process.env.TWITTER_USERNAME}`,
        site: `@${process.env.TWITTER_USERNAME}`,
        cardType: 'summary',
      }}
      openGraph={{
        url: process.env.SITE_URL,
        title: process.env.SITE_TITLE,
        description: process.env.SITE_DESCRIPTION,
        images: [
          {
            url: process.env.PROFILE_IMAGE,
            width: 256,
            height: 256,
            alt: 'Profile Image',
          },
        ],
        // eslint-disable-next-line @typescript-eslint/camelcase
        site_name: process.env.SITE_NAME,
        locale: process.env.SITE_LOCALE,
      }}
    />
    <IconContext.Provider
      value={{ className: 'inline align-middle', style: { marginTop: '-0.18em' } }}
    >
      <Component {...pageProps} />
    </IconContext.Provider>
  </>
)

export default App
