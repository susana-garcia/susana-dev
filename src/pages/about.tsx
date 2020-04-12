import React from 'react'
import { NextPage } from 'next'
import Layout from 'components/layout/Layout'
import { NextSeo } from 'next-seo'
import Subheader from 'components/layout/Subheader'
import Container from 'components/layout/Container'
import SkillCard from 'components/SkillCard'
import Link from 'components/Link'
import Avatar from 'components/Avatar'

const AboutPage: NextPage = () => (
  <>
    <NextSeo title="About" />
    <Layout
      subheader={
        <Subheader title="Susana" description="">
          <Avatar size="large" className="mt-4" />
        </Subheader>
      }
    >
      <Container className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-400">
        <p className="mb-4">
          I'm Susana, a Senior Software Engineer and this is the place where I share content related
          to backend development using different languages, machine learning and more.
        </p>
      </Container>
      <Container size="large" className="my-12 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="md:col-span-2 text-center text-6xl font-black mb-4">
          <Subheader
            title="Skills"
            description="Short introduction of my skills including the past and the now."
          />
        </div>
        <SkillCard
          title="Backend Development"
          sinceYear={2007}
          now="Currently developing mostly in Golang."
          past="Started developing backend solutions in 2007. First Java, then NodeJs and finally Elixir/OTP.
          I've worked in all kind of projects: public administrations, banks, e-commerce, travel and e-learning companies
          and also in my own products."
        />
        <SkillCard
          title="API"
          sinceYear={2011}
          now="At the moment using Golang."
          past="Started developing APIs in 2010 with Java, also with NodeJs in 2013 and then with Elixir since 2017.
          In all that time I wrote SOAP, REST and GraphQL APIs."
        />
        <SkillCard
          title="DevOps"
          sinceYear={2017}
          now="Writing development scripts for internal applications and participating in architectural design."
          past="I started using Docker and Kubernetes from a developer's point of view."
        />
        <SkillCard
          title="Machine Learning"
          sinceYear={2019}
          now="I read all articles and books that I can find."
          past="I started learning about this topic because of my interest in maths. Doing the Coursera online course 
          of 'Machine Learning' helped me getting starting."
        />
      </Container>
      <Container className="mb-20 text-center">
        <p className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-400">
          If you have any question or feedback, please feel free to talk to me on
          <Link
            href={`https://twitter.com/${process.env.TWITTER_USERNAME}`}
            title="Twitter account"
          >
            Twitter
          </Link>
          via direct message as I have it open for everyone.
        </p>
      </Container>
    </Layout>
  </>
)

export default AboutPage
