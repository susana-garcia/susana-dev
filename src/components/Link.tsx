import React from 'react'
import clsx from 'clsx'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type LinkRef = HTMLAnchorElement

const Link = React.forwardRef<LinkRef, LinkProps>((props, ref) => {
  const { children, className, ...restProps } = props

  return (
    <a
      ref={ref}
      {...restProps}
      className={clsx(
        'rounded-full px-2 py-1',
        'hover:bg-primary hover:text-white',
        'cursor-pointer hover:no-underline',
        className
      )}
    >
      {children}
    </a>
  )
})

export default Link
