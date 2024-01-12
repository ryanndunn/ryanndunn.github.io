import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageContainerClass="page--about">
      <div className="page--content">
        <h1>About Me</h1>
        <p>I am a Senior Web Developer with over a decade of experience. In my time as a professional web developer, I’ve been involved in every part of the production team.</p>
        <p>To understand how I work, it is important to understand where I come from. My parents were small business owners who had to find solutions and build resilience. I was raised in an environment that allowed for creative problem-solving and a high standard of work ethic. I believe this upbringing fueled my passion for constant honing and mastery of crafts. I have been playing music my whole life, and I continue to find new and exciting ways to pull notes and rhythms out of my instrument. In the past year or so, I took to playing chess. I like the mental challenge and use of strategies, much like web development.</p>
        <p>Programming and web development fall naturally into my talent lineup. I have worked on hundreds of small business websites. The idea of being part of their success is something that I find a deep connection with. This is why I chose web development as my career, and I’ve never looked back.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />
export default AboutPage