import React from 'react'
import { TinyLetter } from 'react-tinyletter'
import clsx from 'clsx'

interface NewsletterProps {
  className?: string
}

const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  if (!process.env.TINY_LETTER_ID) return null

  return (
    <div
      className={clsx(
        'p-4 md:p-6 text-center',
        'bg-white dark:bg-gray-900 rounded border-gray-200 shadow overflow-hidden',
        className
      )}
    >
      <h3 className="font-black text-lg">Join My Newsletter</h3>
      <p className="text-gray-700">Get new content directly to your - Don't miss out.</p>
      <TinyLetter list={process.env.TINY_LETTER_ID} className="mt-3">
        <input
          className="border border-primary px-2 py-1 rounded-tl rounded-bl bg-transparent w-40"
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
  )
}
export default Newsletter
