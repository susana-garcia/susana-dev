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
        <Subheader title="👋 Hi" description="I'm Lailo">
          <Avatar size="large" className="mt-4" />
        </Subheader>
      }
    >
      <Container className="text-lg font-light leading-relaxed text-gray-700 dark:text-gray-400">
        <p className="mb-4">
          I studied Computer Science at the University of Applied Sciences of Eastern Switzerland.
        </p>
        <p className="mb-4">
          After my studies late 2012, I joined startup after startup. I mainly focused on building
          MVPs from scratch and increasing customer base with growth hacking strategies.
        </p>
        <p className="mb-4">
          Since 2013, I work mostly remotely from all around the world. I learned a lot about
          working with and leading remote teams.
        </p>
        <p className="mb-4">
          My current focus is on simplicity in code and design. While some people over engineer, I
          prefer to start with minimal feature set.
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
          title="Web"
          sinceYear={2008}
          now="Currently working React, TailwindCSS and Typescript, and also keeping an eye on Svelte
          and RedwoodJS."
          past="Started developing web applications in 2010. First, only static websites with HTML, CSS and
            JavaScript, switched quickly to Ruby on Rails and Python Django. Then started using React in
            2014 and VueJS in 2017."
        />
        <SkillCard
          title="Mobile"
          sinceYear={2010}
          now="Currently developing games and apps with SwiftUI, and learning to build apps for watchOS, macOS and iPadOS."
          past="I started learning Objective-C shortly after the AppStore was introduced. Later I used 
          Swift as my primary programming language. I also worked on cross platform projects using
          Sencha Touch, Ionic and React Native."
        />
        <SkillCard
          title="API"
          sinceYear={2013}
          now="Currently using with NodeJS and Prisma to develop GraphQL APIs and learning Golang.
          I'm also keeping an eye on Swift its Vapor web framework."
          past="Started developing REST APIs in 2012 with Ruby on Rails, switched to Python Django in 2013 and using Node
          since 2015. In 2017, I started developing GraphQL APIs with NodeJS and
          Apollo GraphQL."
        />
        <SkillCard
          title="Design"
          sinceYear={2014}
          now="Currently I'm focused on reducing the gap between designers and developers by researching the best combination 
          of tools like Sketch, Zeplin and TailwindCSS."
          past="I started focusing on design when I started developing mobile apps. I always tried get the best user 
          interface with the least amount of interactions. I took this design passion from mobile into web development with the 
          mobile first strategy."
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
