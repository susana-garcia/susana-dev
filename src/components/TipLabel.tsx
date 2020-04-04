import React from 'react'
import { GoLightBulb } from 'react-icons/go'
import clsx from 'clsx'

interface TipLabelProps {
  className?: string
}

const TipLabel: React.FC<TipLabelProps> = ({ className }) => (
  <span className={clsx('text-xs', className)}>
    <GoLightBulb className="mr-1" />
    Quick Tip
  </span>
)

export default TipLabel
