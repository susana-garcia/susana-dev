import React from 'react'
import { FiHeart } from 'react-icons/fi'
import Container from 'components/layout/Container'

const Footer = () => {
  return (
    <footer className="py-2">
      <Container size="small">
        <div className="text-xs text-center text-gray-600">
          Made with <FiHeart className="text-red-600" /> by{' '}
          <a title="Twitter account" href="https://www.twitter.com/lailo_ch">
            @lailo_ch
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
