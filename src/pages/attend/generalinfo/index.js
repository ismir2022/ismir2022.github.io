import React from 'react'
import Layout from '../../../components/layout'
import GeneralInfo from '../../../components/generalinfo'

const Index = () => {
  return (
    <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
            <GeneralInfo/>
      </div>
    </Layout>
  )
}

export default Index