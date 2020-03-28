import React from 'react'
import { FiHeart, FiRss } from 'react-icons/fi'
import Container from 'components/layout/Container'

const Footer = () => {
  return (
    <footer className="py-2">
      <Container size="small" className="grid grid-cols-2 gap-4">
        <div className="text-xs text-gray-600">
          Made with <FiHeart className="text-red-600" /> by{' '}
          <a title="Twitter account" href="https://www.twitter.com/lailo_ch">
            @lailo_ch
          </a>
        </div>
        <div className="text-xs text-center text-gray-600">
          <a title="RSS" href="/rss.xml">
            <FiRss className="mr-1" />
            RSS
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
