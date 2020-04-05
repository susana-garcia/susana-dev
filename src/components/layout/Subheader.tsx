import React from 'react'
import Container from 'components/layout/Container'

interface SubheaderProps {
  title: string
  description?: string
}

const Subheader: React.FC<SubheaderProps> = ({ title, description, children }) => (
  <Container className="text-center">
    <h1 className="text-4xl md:text-5xl font-black leading-tight font-black">{title}</h1>
    {description && <p className="text-lg font-thin text-gray-600 ">{description}</p>}
    {children && <div className="mt-2">{children}</div>}
  </Container>
)

export default Subheader
