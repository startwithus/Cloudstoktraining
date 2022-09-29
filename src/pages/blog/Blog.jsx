import React from 'react'
import Layout from '../../layout/Layout'
import './Blog.css'
import PageBlog from './PageBlog'
import Session6 from './component/Session6'

const Blog = () => {
  return (
    <>
      <Layout>

      <div className='blog'>
      <PageBlog/>
      <Session6/>

      </div>



        
      </Layout>
    </>
  )
}

export default Blog