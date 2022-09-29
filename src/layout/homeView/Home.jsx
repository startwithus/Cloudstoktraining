import React from 'react'
import Layout from '../Layout'
import { Banner } from './banner/Banner'
import Card from '../../component/card/Card'
import Section from '../../component/section1/Section'
import Section2 from '../../component/Section2/Section2'
import Section3 from '../../component/Section3/Section3'
import Section4 from '../../component/Section4/Section4'

 const Home = () => {
  return (
    <>
      <Layout>
        <Banner/>
        <Card/>
        <Section/>
        <Section2/>
        <Section3/>
        <Section4/>
      </Layout>
    </>
  )
}
export default Home;