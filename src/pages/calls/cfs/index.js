import React from 'react'
import Layout from '../../../components/layout'
import Sponsorships from '../../../components/sponsorships'

const Index = () => {
  return (
    <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
            <Sponsorships/>
      </div>
    </Layout>
  )
}

export default Index
