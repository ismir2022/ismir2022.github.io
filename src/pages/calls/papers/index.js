import React from 'react'
import Layout from '../../../components/layout'
import Papers from '../../../components/papers'

const Index = () => {
  return (
    <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
            <Papers/>
      </div>
    </Layout>
  )
}

export default Index
