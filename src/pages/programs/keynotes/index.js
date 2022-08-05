import React from 'react'
import TopNav from '../../../components/top-nav'
import Keynote from '../../../components/keynote'

const Index = () => {
  return (
    <div className="bg-[#E9ECEF]">
      <TopNav/>
      <div className="flex flex-col space-y-5 mx-20 ">
        <Keynote/>
      </div>
    </div>
  )
}

export default Index
