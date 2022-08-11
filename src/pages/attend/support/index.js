import React from 'react'
import Layout from '../../../components/layout'
import FS from '../../../components/financial'

const Index = () => {
  return (
    <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
            <FS/>
      </div>
    </Layout>
  )
}

export default Index