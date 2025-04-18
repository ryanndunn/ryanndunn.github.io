import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageContainerClass="page--about">
      <div className="page--content">
        <h1>About Me</h1>
        <p>Hey, I’m Ryan Dunn — a Frontend Engineer based in Baltimore, MD with a passion for crafting interactive, performant user experiences on the web. With over ten years of professional experience, I’ve had the opportunity to build award-winning websites and lead frontend initiatives at Duckpin, where I specialize in React and WordPress.</p>
        <p>My modern frontend workflows are all aimed at solving real-world problems with clean, maintainable code. I believe the web experiences that the world deserves are streamlined for performance, accessible and intuitive enough so anyone can use it.</p>
        <p>My parents are small business owners, and that’s shaped the way I approach my career — with humility, hard work, and a focus on the people behind the project. Whether I'm building tools for a local shop or scaling experiences for larger audiences, I aim to create work that’s impactful, thoughtful, and lasting. Outside of work, I play music and chess, both of which keep my mind sharp and carry through to my development work.</p>
        <p>Web development is a part of who I am - it keeps me focused and gives me a sense of community fulfillment that I have not found with anything else.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />
export default AboutPage