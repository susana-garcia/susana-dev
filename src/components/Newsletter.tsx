import React from 'react'
import { TinyLetter } from 'react-tinyletter'
import clsx from 'clsx'
import { GiNewspaper } from 'react-icons/gi'

interface NewsletterProps {
  className?: string
}

const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  if (!process.env.TINY_LETTER_ID) return null

  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-900  rounded border-gray-200 shadow overflow-hidden',
        'flex flex-col sm:flex-row ',
        className
      )}
    >
      <div className="bg-primary text-white text-6xl p-4 pt-8 flex items-center justify-center sm:w-48">
        <GiNewspaper />
      </div>
      <div className="p-6">
        <h3 className="font-black text-lg">Join My Newsletter</h3>
        <p className="text-gray-700">Get new content directly to your - Don't miss out.</p>
        <TinyLetter list={process.env.TINY_LETTER_ID} className="mt-3 flex">
          <input
            className="border border-primary px-2 py-1 flex-grow rounded-tl rounded-bl bg-transparent"
            type="email"
            placeholder="your@email.com"
          />
          <input
            className="bg-primary border border-primary py-1 px-2 text-white rounded-tr rounded-br"
            type="submit"
            value="Subscribe"
          />
        </TinyLetter>
      </div>
    </div>
  )
}
export default Newsletter
