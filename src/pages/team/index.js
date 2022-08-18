import React from 'react'
import Layout from "../../components/layout";
import Team from "../../components/team";

const index = () => {
  return (
    <div>
        <Layout>
          <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
            <Team />
          </div>
        </Layout>
    </div>
  );
}

export default index
