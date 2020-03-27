import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  className?: string
  grid?: boolean
  size?: 'small' | 'base' | 'fluid'
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
        'max-w-2xl': size === 'small',
        'max-w-6xl': size === 'base',
        'max-w-full': size === 'fluid',
      },
      className
    )}
  >
    {children}
  </div>
)

export default Container
