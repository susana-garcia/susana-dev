import React from 'react'
import clsx from 'clsx'

interface AvatarProps {
  className?: string
  size: 'small' | 'large'
}

const Avatar: React.FC<AvatarProps> = ({ className, size }) => (
  <div
    className={clsx(
      'inline-block',
      'rounded-full overflow-hidden ',
      'border border-gray-300 dark:border-gray-900',
      'bg-white dark:bg-black',
      'shadow-xl',
      {
        'w-64 h-64': size === 'large',
        'w-24 h-24': size === 'small',
      },
      {
        'p-2': size === 'large',
        'p-1': size === 'small',
      },
      className
    )}
  >
    <img
      src={`${process.env.PROFILE_IMAGE}${size === 'large' ? '?s=714' : '?s=258'}`}
      alt="Profile image"
      className="rounded-full ,"
    />
  </div>
)

export default Avatar
