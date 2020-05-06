import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  className?: string
  grid?: boolean
  size?: 'base' | 'medium' | 'large' | 'fluid'
}

const Container: React.FC<ContainerProps> = ({
  size = 'base',
  grid = false,
  className,
  children,
}) => (
  <div
    className={clsx(
      'container',
      'px-4 py-2',
      {
        'grid gap-4': grid,
      },
      {
        'max-w-lg md:max-w-2xl': size === 'base',
        'max-w-lg md:max-w-3xl': size === 'medium',
        'max-w-lg md:max-w-5xl': size === 'large',
        'max-w-full': size === 'fluid',
      },
      className
    )}
  >
    {children}
  </div>
)

export default Container
