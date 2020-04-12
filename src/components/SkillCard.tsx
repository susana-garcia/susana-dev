import React from 'react'
import Card from 'components/Card'

interface SkillCardProps {
  title: string
  now: string
  past: string
  sinceYear: number
}

const SkillCard: React.FC<SkillCardProps> = ({ title, now, past, sinceYear }) => {
  const year = new Date().getFullYear()
  const yearsOfExperience = year - sinceYear

  return (
    <Card>
      <header className="text-center">
        <h2 className="text-4xl font-black leading-tight">{title}</h2>
        <small className="text-gray-500">{yearsOfExperience}+ Years</small>
      </header>
      <hr className="my-6 dark:border-gray-700" />
      <section>
        <h3 className="font-bold mb-1">Now</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-6">{now}</p>
      </section>
      <section>
        <h3 className="font-bold mb-1">Past</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{past}</p>
      </section>
    </Card>
  )
}

export default SkillCard
