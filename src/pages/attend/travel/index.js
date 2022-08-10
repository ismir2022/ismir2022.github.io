import React from 'react'
import Layout from '../../../components/layout'
import Travel from '../../../components/travel'

const Index = () => {
  return (
    <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
            <Travel/>
      </div>
    </Layout>
  )
}

export default Index