import React from 'react'
import Section from '../../component/section1/Section'
import Section2 from '../../component/Section2/Section2'
import Section3 from '../../component/Section3/Section3'
import Section4 from '../../component/Section4/Section4'
import Layout from '../../layout/Layout'
import './About.css'
import Aboutpage from './Aboutpage/Aboutpage'

const About = () => {
  return (
    <>
      <Layout>
        <div className="About">
        <Aboutpage/>
        <Section/>
        <Section2/>
        <Section3/>
        <Section4/>
        
        
        </div>
      </Layout>
    </>
  )
}

export default About