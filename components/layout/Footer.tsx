import React from 'react'
import { useRouter } from 'next/router'
import { FiHeart } from 'react-icons/fi'
import Container from './Container'
import Bio from '../Bio'

const Footer = () => {
  const router = useRouter()
  const isIndexPage = router.pathname !== '/'

  return (
    <footer className="bg-white dark:bg-gray-975 border-t border-gray-300 dark:border-gray-900 py-10 mt-8">
      <Container size="small">
        {isIndexPage && <Bio />}
        {!isIndexPage && (
          <div className="text-xs text-center text-gray-600">
            Made with <FiHeart /> by{' '}
            <a title="Twitter account" href="https://www.twitter.com/lailo_ch">
              @lailo_ch
            </a>
          </div>
        )}
      </Container>
    </footer>
  )
}

export default Footer
