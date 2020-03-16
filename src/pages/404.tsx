import React from 'react'
import Layout from 'components/layout/Layout'

const Error = () => (
  <Layout title="Page Not Found" centered>
    <h1 className="text-3xl font-black mb-2">Not found</h1>
    <p className="text-center text-lg font-light">Couldn't find wha you're looking for.</p>
  </Layout>
)

export default Error
