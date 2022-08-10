import React from 'react'
import Layout from '../../components/layout'
import Contact from '../../components/contact'

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-5 md:mx-40 lg:mx-72 mx-5 text-left ">
        <Contact/>
      </div>
    </Layout>
      

  )
}

export default Index
