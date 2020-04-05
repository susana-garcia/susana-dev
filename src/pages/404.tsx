import React from 'react'
import Layout from 'components/layout/Layout'
import { NextSeo } from 'next-seo'
import NotFoundSVG from 'assets/svg/undraw-empty.svg'

const Error = () => (
  <>
    <NextSeo title="Page Not Found" description="Couldn't find wha you're looking for." />
    <Layout centered>
      <NotFoundSVG className="text-primary w-64 h-64" />
      <h1 className="text-3xl font-black mb-2">Not found</h1>
      <p className="text-center text-lg font-light">Couldn't find what you're looking for.</p>
    </Layout>
  </>
)

export default Error
