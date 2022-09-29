import React from 'react'
import Card from '../../component/card/Card'

import Section4 from '../../component/Section4/Section4'
import Layout from '../../layout/Layout'
import BannerServices from './BannerServices/BannerServices'
import './Services.css'
import Servicesfence from './servicessection/Servicesfence'

const Services = () => {
  return (
  <>
    <Layout>
    <div className='services'>
    <BannerServices/>
    <Card/>
    <Servicesfence/>

    <Section4/>
    </div>
    </Layout>
  </>
    
  )
}

export default Services